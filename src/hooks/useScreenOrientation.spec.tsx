import {renderHook, act} from '@testing-library/react-hooks';
import {Dimensions} from 'react-native';
import {useScreenOrientation} from './useScreenOrientation';

describe('useScreenOrientation', () => {
  const mockAddEventListener = jest.fn();
  const mockRemoveEventListener = jest.fn();

  beforeEach(() => {
    // Mock the Dimensions.addEventListener and removeEventListener methods
    Dimensions.addEventListener = mockAddEventListener;
    mockAddEventListener.mockImplementation((event, handler) => {
      return {
        remove: mockRemoveEventListener,
      };
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return true for isPortrait when width is less than height', () => {
    mockAddEventListener.mockImplementationOnce((event, handler) => {
      handler({window: {width: 400, height: 800}});
      return {remove: mockRemoveEventListener};
    });

    const {result} = renderHook(() => useScreenOrientation());

    expect(result.current.isPortrait).toBe(true);
  });

  it('should return false for isPortrait when width is greater than height', () => {
    mockAddEventListener.mockImplementationOnce((event, handler) => {
      handler({window: {width: 800, height: 400}});
      return {remove: mockRemoveEventListener};
    });

    const {result} = renderHook(() => useScreenOrientation());

    expect(result.current.isPortrait).toBe(false);
  });

  it('should update isPortrait state on dimension change', () => {
    let handler;
    mockAddEventListener.mockImplementationOnce((event, newHandler) => {
      handler = newHandler;
      return {remove: mockRemoveEventListener};
    });

    const {result} = renderHook(() => useScreenOrientation());

    // Initially, the width is less than the height
    act(() => {
      handler({window: {width: 400, height: 800}});
    });
    expect(result.current.isPortrait).toBe(true);

    // Change dimensions to width greater than height
    act(() => {
      handler({window: {width: 800, height: 400}});
    });
    expect(result.current.isPortrait).toBe(false);

    // Change dimensions back to width less than height
    act(() => {
      handler({window: {width: 400, height: 800}});
    });
    expect(result.current.isPortrait).toBe(true);
  });
});
