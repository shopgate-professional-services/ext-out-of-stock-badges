import React from 'react';
import Icon from '@shopgate/pwa-common/components/Icon';
import { bgColor, textColor } from '../../config';

/**
 * The SoldOut component.
 * @param {Object} props The icon component properties.
 * @returns {JSX}
 */
const SoldOut = (props) => {
  const content = `
    <circle cx="32" cy="32" r="32" fill="${bgColor}"/>
    <path fill="${textColor}" d="M14.792 28.682H12.664C12.6546 29.298 12.7666 29.83 13 30.278C13.2333 30.726 13.546 31.0947 13.938 31.384C14.3393 31.6733 14.7966 31.8833 15.31 32.014C15.8326 32.154 16.3693 32.224 16.92 32.224C17.6013 32.224 18.1986 32.1447 18.712 31.986C19.2346 31.8273 19.6686 31.608 20.014 31.328C20.3686 31.0387 20.6346 30.698 20.812 30.306C20.9893 29.914 21.078 29.4893 21.078 29.032C21.078 28.472 20.9566 28.0147 20.714 27.66C20.4806 27.296 20.2006 27.0067 19.874 26.792C19.5473 26.5773 19.216 26.4233 18.88 26.33C18.5533 26.2273 18.2966 26.1573 18.11 26.12C17.4846 25.9613 16.976 25.8307 16.584 25.728C16.2013 25.6253 15.898 25.5227 15.674 25.42C15.4593 25.3173 15.3146 25.2053 15.24 25.084C15.1653 24.9627 15.128 24.804 15.128 24.608C15.128 24.3933 15.1746 24.216 15.268 24.076C15.3613 23.936 15.478 23.8193 15.618 23.726C15.7673 23.6327 15.9306 23.5673 16.108 23.53C16.2853 23.4927 16.4626 23.474 16.64 23.474C16.9106 23.474 17.158 23.4973 17.382 23.544C17.6153 23.5907 17.8206 23.67 17.998 23.782C18.1753 23.894 18.3153 24.048 18.418 24.244C18.53 24.44 18.5953 24.6873 18.614 24.986H20.742C20.742 24.4073 20.63 23.9173 20.406 23.516C20.1913 23.1053 19.8973 22.7693 19.524 22.508C19.1506 22.2467 18.7213 22.06 18.236 21.948C17.76 21.8267 17.2606 21.766 16.738 21.766C16.29 21.766 15.842 21.8267 15.394 21.948C14.946 22.0693 14.5446 22.256 14.19 22.508C13.8353 22.76 13.546 23.0773 13.322 23.46C13.1073 23.8333 13 24.2767 13 24.79C13 25.2473 13.084 25.6393 13.252 25.966C13.4293 26.2833 13.658 26.5493 13.938 26.764C14.218 26.9787 14.5353 27.156 14.89 27.296C15.2446 27.4267 15.6086 27.5387 15.982 27.632C16.346 27.7347 16.7053 27.828 17.06 27.912C17.4146 27.996 17.732 28.094 18.012 28.206C18.292 28.318 18.516 28.458 18.684 28.626C18.8613 28.794 18.95 29.0133 18.95 29.284C18.95 29.536 18.8846 29.746 18.754 29.914C18.6233 30.0727 18.46 30.1987 18.264 30.292C18.068 30.3853 17.858 30.4507 17.634 30.488C17.41 30.516 17.2 30.53 17.004 30.53C16.7146 30.53 16.4346 30.4973 16.164 30.432C15.8933 30.3573 15.6553 30.25 15.45 30.11C15.254 29.9607 15.0953 29.7693 14.974 29.536C14.8526 29.3027 14.792 29.018 14.792 28.682ZM24.7098 27.044C24.7098 26.6053 24.7564 26.1807 24.8498 25.77C24.9524 25.3593 25.1111 24.9953 25.3258 24.678C25.5404 24.3513 25.8204 24.0947 26.1658 23.908C26.5111 23.712 26.9311 23.614 27.4258 23.614C27.9204 23.614 28.3404 23.712 28.6858 23.908C29.0311 24.0947 29.3111 24.3513 29.5258 24.678C29.7404 24.9953 29.8944 25.3593 29.9878 25.77C30.0904 26.1807 30.1418 26.6053 30.1418 27.044C30.1418 27.464 30.0904 27.8747 29.9878 28.276C29.8944 28.668 29.7404 29.0227 29.5258 29.34C29.3111 29.6573 29.0311 29.914 28.6858 30.11C28.3404 30.2967 27.9204 30.39 27.4258 30.39C26.9311 30.39 26.5111 30.2967 26.1658 30.11C25.8204 29.914 25.5404 29.6573 25.3258 29.34C25.1111 29.0227 24.9524 28.668 24.8498 28.276C24.7564 27.8747 24.7098 27.464 24.7098 27.044ZM22.5118 27.044C22.5118 27.772 22.6238 28.4533 22.8478 29.088C23.0718 29.7133 23.3938 30.2593 23.8138 30.726C24.2338 31.1927 24.7471 31.5613 25.3538 31.832C25.9698 32.0933 26.6604 32.224 27.4258 32.224C28.2004 32.224 28.8911 32.0933 29.4978 31.832C30.1044 31.5613 30.6178 31.1927 31.0378 30.726C31.4578 30.2593 31.7798 29.7133 32.0038 29.088C32.2278 28.4533 32.3398 27.772 32.3398 27.044C32.3398 26.2973 32.2278 25.6067 32.0038 24.972C31.7798 24.328 31.4578 23.768 31.0378 23.292C30.6178 22.816 30.1044 22.4427 29.4978 22.172C28.8911 21.9013 28.2004 21.766 27.4258 21.766C26.6604 21.766 25.9698 21.9013 25.3538 22.172C24.7471 22.4427 24.2338 22.816 23.8138 23.292C23.3938 23.768 23.0718 24.328 22.8478 24.972C22.6238 25.6067 22.5118 26.2973 22.5118 27.044ZM34.4023 22.004V32H41.4723V30.152H36.6003V22.004H34.4023ZM45.4591 30.152V23.852H47.0271C47.5684 23.852 48.0211 23.9313 48.3851 24.09C48.7584 24.2393 49.0571 24.4587 49.2811 24.748C49.5051 25.0373 49.6637 25.3873 49.7571 25.798C49.8597 26.1993 49.9111 26.652 49.9111 27.156C49.9111 27.7067 49.8411 28.1733 49.7011 28.556C49.5611 28.9387 49.3744 29.2513 49.1411 29.494C48.9077 29.7273 48.6417 29.8953 48.3431 29.998C48.0444 30.1007 47.7364 30.152 47.4191 30.152H45.4591ZM43.2611 22.004V32H47.5731C48.3384 32 49.0011 31.874 49.5611 31.622C50.1304 31.3607 50.6017 31.006 50.9751 30.558C51.3577 30.11 51.6424 29.578 51.8291 28.962C52.0157 28.346 52.1091 27.674 52.1091 26.946C52.1091 26.1153 51.9924 25.392 51.7591 24.776C51.5351 24.16 51.2177 23.6467 50.8071 23.236C50.4057 22.8253 49.9251 22.5173 49.3651 22.312C48.8144 22.1067 48.2171 22.004 47.5731 22.004H43.2611ZM19.754 41.044C19.754 40.6053 19.8007 40.1807 19.894 39.77C19.9967 39.3593 20.1553 38.9953 20.37 38.678C20.5847 38.3513 20.8647 38.0947 21.21 37.908C21.5553 37.712 21.9753 37.614 22.47 37.614C22.9647 37.614 23.3847 37.712 23.73 37.908C24.0753 38.0947 24.3553 38.3513 24.57 38.678C24.7847 38.9953 24.9387 39.3593 25.032 39.77C25.1347 40.1807 25.186 40.6053 25.186 41.044C25.186 41.464 25.1347 41.8747 25.032 42.276C24.9387 42.668 24.7847 43.0227 24.57 43.34C24.3553 43.6573 24.0753 43.914 23.73 44.11C23.3847 44.2967 22.9647 44.39 22.47 44.39C21.9753 44.39 21.5553 44.2967 21.21 44.11C20.8647 43.914 20.5847 43.6573 20.37 43.34C20.1553 43.0227 19.9967 42.668 19.894 42.276C19.8007 41.8747 19.754 41.464 19.754 41.044ZM17.556 41.044C17.556 41.772 17.668 42.4533 17.892 43.088C18.116 43.7133 18.438 44.2593 18.858 44.726C19.278 45.1927 19.7913 45.5613 20.398 45.832C21.014 46.0933 21.7047 46.224 22.47 46.224C23.2447 46.224 23.9353 46.0933 24.542 45.832C25.1487 45.5613 25.662 45.1927 26.082 44.726C26.502 44.2593 26.824 43.7133 27.048 43.088C27.272 42.4533 27.384 41.772 27.384 41.044C27.384 40.2973 27.272 39.6067 27.048 38.972C26.824 38.328 26.502 37.768 26.082 37.292C25.662 36.816 25.1487 36.4427 24.542 36.172C23.9353 35.9013 23.2447 35.766 22.47 35.766C21.7047 35.766 21.014 35.9013 20.398 36.172C19.7913 36.4427 19.278 36.816 18.858 37.292C18.438 37.768 18.116 38.328 17.892 38.972C17.668 39.6067 17.556 40.2973 17.556 41.044ZM37.9305 42.22V36.004H35.7325V42.22C35.7325 42.9667 35.5831 43.5173 35.2845 43.872C34.9858 44.2173 34.4445 44.39 33.6605 44.39C33.2125 44.39 32.8531 44.3293 32.5825 44.208C32.3211 44.0773 32.1158 43.914 31.9665 43.718C31.8171 43.5127 31.7191 43.2793 31.6725 43.018C31.6258 42.7567 31.6025 42.4907 31.6025 42.22V36.004H29.4045V42.22C29.4045 43.5827 29.7731 44.5907 30.5105 45.244C31.2571 45.8973 32.3071 46.224 33.6605 46.224C34.9951 46.224 36.0405 45.8973 36.7965 45.244C37.5525 44.5813 37.9305 43.5733 37.9305 42.22ZM42.5954 37.852V46H44.7934V37.852H47.7894V36.004H39.5994V37.852H42.5954Z"/>
  `;
  return <Icon content={content} viewBox="0 0 64 64" size={250} {...props} />;
};

export default SoldOut;
