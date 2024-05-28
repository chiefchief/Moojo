import React, {FC} from 'react';
import {useRecoilValue} from 'recoil';
import {offersState} from '../../store';
import {FlatList, ListRenderItem, RefreshControl, StyleSheet, View} from 'react-native';
import {OfferItem} from '../../services/api/types';
import {OfferFeedItem} from './OfferFeedItem/OfferFeedItem';
import {styles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ListEmptyComponent} from './ListEmptyComponent/ListEmptyComponent';
import {useGetOffers} from '../../hooks/useGetOffers';

const keyExtractor = (item: OfferItem) => `${item.id}`;
const renderItem: ListRenderItem<OfferItem> = ({item, index}) => <OfferFeedItem item={item} index={index} />;
const separator = () => <View style={styles.separator} />;

export const OfferFeed: FC = () => {
  const {offers, isLoading, errorMessage} = useRecoilValue(offersState);
  const {getOffers} = useGetOffers();
  const {bottom, left, right} = useSafeAreaInsets();
  const contentContainerStyle = StyleSheet.flatten([
    Boolean(isLoading || errorMessage) && styles.fullContainer,
    {paddingBottom: bottom || 16, paddingTop: 16, paddingLeft: left || 16, paddingRight: right || 16},
  ]);

  const listEmptyComponent = () => <ListEmptyComponent errorMessage={errorMessage} isLoading={isLoading} />;

  return (
    <FlatList
      data={offers}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={contentContainerStyle}
      ItemSeparatorComponent={separator}
      ListEmptyComponent={listEmptyComponent}
      refreshing={isLoading}
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={getOffers} />}
    />
  );
};
