import { createContext } from 'react';

/**
 * Signals that the out-of-stock badge is already handled by an outer portal
 * (`product-item.image`), so the nested `component.product-image` portal does not render a
 * duplicate badge on the same image.
 */
export default createContext(false);
