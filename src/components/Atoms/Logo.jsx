import React from "react";
import { Link } from "react-router-dom";


function Logo({ width = "w-12 sm:w-16", className = "" }) {
  return (
    <Link to={"/"}>
      <div className={`mr-4 ${width} shrink-0 ${className}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="180" height="130" viewBox="0 0 481 383" version="1.1"><path d="M 27.627 119.407 C 19.227 122.534, 11.995 131.597, 12.005 138.985 L 12.010 142.500 14.365 139.556 L 16.721 136.613 23.110 136.252 L 29.500 135.891 32.759 137.937 C 34.552 139.061, 36.939 141.448, 38.065 143.241 L 40.111 146.500 39.695 151.324 C 39.138 157.783, 36.753 160.701, 27.925 165.725 C 19.968 170.252, 15.668 174.512, 13.778 179.738 C 13.129 181.532, 12.239 183, 11.799 183 C 10.629 183, 10.822 193.873, 12.018 195.292 C 12.577 195.956, 14.404 198.446, 16.077 200.824 C 26.012 214.944, 39.720 213.056, 75.846 192.594 C 80.429 189.999, 83.395 189, 86.523 189 L 90.855 189 92.927 191.635 C 100.717 201.538, 86.197 221.863, 63 233.526 C 56.706 236.691, 41.073 242.163, 40.080 241.549 C 39.714 241.323, 39.350 242.007, 39.270 243.069 C 39.168 244.414, 39.788 245.021, 41.312 245.070 L 43.500 245.141 41.500 246 L 39.500 246.859 41.500 246.945 C 42.726 246.998, 43.063 247.315, 42.372 247.765 C 41.129 248.574, 39.995 257.121, 41.232 256.357 C 41.654 256.096, 42 256.535, 42 257.334 C 42 263.400, 23.864 259.380, 17.589 251.924 C 16.120 250.177, 14.668 248.999, 14.362 249.304 C 11.430 252.237, 28.465 262.021, 36.428 261.978 C 42.512 261.945, 126.066 215.024, 134.876 206.693 C 147.157 195.079, 144.290 178.262, 128.287 168.053 L 120.859 163.314 108.679 163.409 L 96.500 163.504 88.500 166.810 C 84.100 168.629, 75.325 173.123, 69 176.797 L 57.500 183.477 53.169 183.489 C 48.173 183.502, 46 181.417, 46 176.609 L 46 173.600 58.913 161.050 C 72.676 147.674, 73.566 146.258, 72.535 139.386 L 71.873 134.969 66.686 132.360 C 63.834 130.926, 57.363 127.292, 52.306 124.286 L 43.112 118.821 37.306 118.393 C 33.694 118.127, 30.037 118.511, 27.627 119.407 M 330.634 177.237 C 331.295 199.758, 332 199.979, 332 177.667 C 332 167.358, 331.610 160, 331.064 160 C 330.499 160, 330.328 166.835, 330.634 177.237 M 353.938 165.750 C 353.904 168.912, 353.720 180.680, 353.528 191.900 C 353.191 211.604, 353.784 217, 356.283 217 C 356.812 217, 356.713 216.359, 356.064 215.577 C 355.214 214.553, 354.906 206.540, 354.967 187.077 C 355.014 172.184, 354.816 160, 354.526 160 C 354.237 160, 353.972 162.588, 353.938 165.750" stroke="none" fill="#36054e" fill-rule="evenodd"/><path d="M 17.500 136.950 C 16.400 137.403, 14.488 139.157, 13.250 140.847 L 11 143.919 11 163.460 C 11 182.893, 11.525 185.969, 13.778 179.738 C 15.668 174.512, 19.968 170.252, 27.925 165.725 C 36.753 160.701, 39.138 157.783, 39.695 151.324 L 40.111 146.500 38.065 143.241 C 34.139 136.989, 24.538 134.052, 17.500 136.950 M 72.565 139.493 C 73.765 145.891, 72.447 147.978, 58.954 161.050 L 46 173.600 46 176.609 C 46 181.417, 48.173 183.502, 53.169 183.489 L 57.500 183.477 69 176.797 C 75.325 173.123, 84.100 168.628, 88.500 166.809 L 96.500 163.500 108.201 163.500 C 114.636 163.500, 119.586 163.198, 119.201 162.829 C 118.249 161.919, 73.052 136, 72.415 136 C 72.137 136, 72.204 137.572, 72.565 139.493 M 177.782 156.846 C 171.425 157.385, 162.540 161, 167.573 161 C 168.124 161, 168.646 161.951, 168.734 163.113 C 168.976 166.326, 170.426 166.934, 179.750 167.734 L 185 168.185 185.015 189.343 C 185.025 203.372, 185.357 209.995, 186 209 L 186.969 207.500 187 211 C 187.054 217.166, 193.493 219.150, 196.873 214.043 L 198.500 211.585 197 212.485 L 195.500 213.384 196.617 211.942 C 197.345 211.003, 197.796 203.195, 197.910 189.541 C 198.006 178.014, 198.237 168.429, 198.424 168.243 C 198.610 168.056, 202.079 167.639, 206.132 167.316 C 214.577 166.643, 216 165.864, 216 161.913 C 216 156.927, 200.727 154.902, 177.782 156.846 M 237.223 157.557 C 235.058 159.073, 234.051 164, 235.906 164 C 236.405 164, 236.579 164.893, 236.294 165.985 C 236.008 167.077, 236.122 168.764, 236.546 169.735 C 236.970 170.706, 237.239 171.859, 237.142 172.299 C 236.908 173.371, 242.297 194.365, 242.970 195 C 243.262 195.275, 243.627 197.057, 243.782 198.961 C 243.938 200.865, 244.409 202.665, 244.830 202.961 C 245.251 203.257, 245.667 204.621, 245.754 205.990 C 245.991 209.731, 249.040 217.093, 250.085 216.447 C 250.588 216.136, 251 216.289, 251 216.787 C 251 218.334, 255.391 217.530, 257.668 215.566 C 258.942 214.467, 260.971 210.066, 262.588 204.894 C 265.427 195.814, 266.374 194.872, 267.503 200.011 C 267.864 201.655, 268.621 203, 269.186 203 C 269.752 203, 269.955 203.675, 269.638 204.500 C 269.322 205.325, 269.525 206, 270.090 206 C 270.656 206, 270.822 206.478, 270.461 207.063 C 270.100 207.648, 270.593 208.998, 271.557 210.063 C 272.521 211.128, 272.903 212.014, 272.405 212.032 C 271.907 212.049, 272.203 212.612, 273.062 213.282 C 273.921 213.952, 274.905 215.249, 275.248 216.166 C 275.674 217.302, 276.898 217.778, 279.102 217.666 L 282.332 217.500 283.916 214.465 C 285.413 211.597, 285.768 210.582, 286.529 207 C 286.704 206.175, 286.915 205.500, 286.998 205.500 C 287.366 205.500, 288.321 200.245, 288.406 197.750 C 288.458 196.238, 288.802 195, 289.171 195 C 289.919 195, 291.240 189.845, 291.478 186 C 291.563 184.625, 292.210 182.433, 292.916 181.129 C 293.622 179.825, 293.780 179.018, 293.266 179.335 C 292.753 179.653, 292.333 179.277, 292.333 178.500 C 292.333 177.723, 292.785 177.367, 293.337 177.708 C 293.934 178.078, 294.082 177.656, 293.701 176.664 C 293.350 175.749, 293.459 175, 293.943 175 C 294.427 175, 294.708 174.213, 294.566 173.251 C 294.425 172.290, 294.915 170.054, 295.655 168.284 C 298.475 161.534, 296.571 156, 291.429 156 C 288.061 156, 284.688 159.589, 285.258 162.568 C 285.530 163.993, 285.312 164.693, 284.710 164.321 C 284.076 163.929, 283.960 164.705, 284.394 166.435 C 284.843 168.224, 284.721 168.946, 284.040 168.525 C 283.093 167.939, 282.639 170.114, 282.646 175.200 C 282.647 176.135, 282.201 176.624, 281.654 176.286 C 281.071 175.926, 280.919 176.346, 281.286 177.304 C 281.631 178.202, 281.534 179.170, 281.072 179.456 C 280.609 179.741, 279.665 182.974, 278.974 186.640 L 277.716 193.305 276.160 190.403 C 275.304 188.806, 274.459 186.635, 274.282 185.578 C 274.105 184.522, 273.464 183.059, 272.858 182.328 C 272.251 181.598, 272.047 181, 272.403 181 C 273.704 181, 269.921 175.028, 267.952 173.974 C 265.020 172.405, 262.402 173.608, 260.747 177.287 C 257.731 183.986, 256.828 186.913, 257.463 187.940 C 257.823 188.523, 257.690 189, 257.167 189 C 256.645 189, 255.921 190.178, 255.560 191.618 C 254.757 194.815, 254.286 194.460, 253.514 190.082 C 253.189 188.235, 252.551 185.999, 252.097 185.112 C 251.642 184.226, 251.472 182.938, 251.718 182.250 C 251.965 181.563, 251.693 181, 251.115 181 C 250.536 181, 250.300 180.381, 250.591 179.624 C 250.881 178.867, 250.371 175.379, 249.457 171.874 C 248.544 168.368, 247.591 164.375, 247.340 163 C 246.175 156.617, 241.871 154.301, 237.223 157.557 M 321.410 158.499 L 318.912 160.997 319.047 187.249 C 319.141 205.462, 319.538 213.942, 320.341 214.942 L 321.500 216.384 320 215.545 L 318.500 214.707 319.616 215.919 C 321.130 217.565, 326.668 218.347, 327.482 217.030 C 327.843 216.446, 328.461 216.167, 328.855 216.410 C 330.099 217.179, 330.295 213.192, 330.399 185.131 L 330.500 157.761 328.185 156.881 C 324.798 155.592, 324.165 155.744, 321.410 158.499 M 354.882 156.647 C 354.816 157.116, 354.816 157.838, 354.882 158.250 C 354.947 158.662, 354.550 159, 354 159 C 353.415 159, 353.072 161.802, 353.173 165.750 L 353.345 172.500 354 166 C 354.382 162.210, 354.720 170.342, 354.812 185.500 C 354.915 202.594, 354.637 210.986, 354 210 C 353.418 209.099, 353.025 208.975, 353.015 209.691 C 353.007 210.346, 353.489 211.184, 354.087 211.554 C 354.685 211.923, 354.952 213.076, 354.680 214.114 C 354.409 215.153, 354.598 215.749, 355.100 215.438 C 355.603 215.127, 356.284 215.577, 356.614 216.437 L 357.214 218 365.048 218 C 369.357 218, 373.165 217.543, 373.510 216.984 C 373.856 216.425, 374.547 216.220, 375.046 216.528 C 376.398 217.364, 383.680 215.177, 385.455 213.402 C 386.305 212.552, 387 212.203, 387 212.625 C 387 213.047, 388.557 211.883, 390.461 210.038 C 392.365 208.193, 393.717 206.352, 393.467 205.946 C 393.216 205.541, 393.630 204.972, 394.385 204.682 C 395.141 204.392, 396.465 202.083, 397.328 199.550 C 398.191 197.018, 398.425 195.237, 397.849 195.593 C 397.164 196.016, 397.185 195.522, 397.909 194.170 C 399.535 191.132, 399.474 178, 397.833 178 C 397.375 178, 397 176.875, 397 175.500 C 397 174.125, 396.564 173, 396.031 173 C 395.499 173, 395.295 172.395, 395.578 171.656 C 395.862 170.917, 394.630 168.780, 392.840 166.906 C 391.050 165.033, 389.672 163.183, 389.778 162.795 C 389.884 162.407, 387.614 160.862, 384.735 159.360 L 379.500 156.630 367.250 156.212 C 360.512 155.982, 354.947 156.178, 354.882 156.647 M 434.500 158.326 C 432.850 158.972, 430.519 160.062, 429.320 160.748 C 426.864 162.153, 421.758 168.804, 424.053 167.606 C 424.849 167.191, 424.626 167.560, 423.559 168.426 C 422.491 169.292, 421.961 170, 422.380 170 C 422.800 170, 422.403 170.740, 421.499 171.644 C 420.407 172.736, 420.057 174.162, 420.458 175.894 L 421.061 178.500 419.948 177 L 418.834 175.500 419.351 179.232 C 419.636 181.284, 419.416 183.243, 418.864 183.584 C 418.254 183.961, 418.147 185.838, 418.592 188.353 C 418.995 190.634, 419.279 193.297, 419.223 194.272 C 419.167 195.246, 419.562 195.771, 420.101 195.438 C 420.708 195.063, 420.819 195.872, 420.394 197.565 C 419.945 199.356, 420.067 200.077, 420.749 199.655 C 421.322 199.301, 422.057 199.707, 422.384 200.558 C 422.765 201.551, 422.572 201.853, 421.843 201.403 C 421.219 201.018, 421.904 202.682, 423.365 205.101 C 424.825 207.520, 426.499 209.376, 427.085 209.225 C 427.670 209.074, 427.894 209.362, 427.583 209.866 C 426.971 210.855, 431.237 214.016, 433.879 214.531 C 434.770 214.705, 435.613 214.938, 435.750 215.048 C 435.887 215.159, 436.337 215.343, 436.750 215.457 C 437.163 215.570, 438.786 216.025, 440.357 216.467 C 456.602 221.037, 470.946 199.678, 465.518 179 C 465.446 178.725, 465.038 177.034, 464.612 175.241 C 464.186 173.449, 463.517 172.180, 463.126 172.422 C 462.735 172.664, 462.342 171.887, 462.252 170.696 C 462.162 169.504, 461.619 168.373, 461.044 168.181 C 460.470 167.990, 460 167.266, 460 166.572 C 460 159.742, 444.057 154.586, 434.500 158.326 M 366.305 169.316 C 365.943 169.902, 365.709 176.258, 365.786 183.440 C 365.862 190.623, 365.942 198.412, 365.962 200.750 L 366 205 369.599 205 C 376.464 205, 384 199.051, 384 193.632 C 384 192.734, 384.410 192, 384.912 192 C 385.414 192, 385.700 190.875, 385.549 189.500 C 385.399 188.125, 385.776 186.993, 386.388 186.985 C 387.103 186.975, 387.143 186.707, 386.500 186.235 C 385.950 185.831, 385.373 183.943, 385.218 182.039 C 385.062 180.135, 384.387 178.230, 383.718 177.804 C 383.048 177.379, 382.907 177.024, 383.405 177.015 C 383.903 177.007, 383.453 176.023, 382.405 174.828 C 381.357 173.634, 381.063 172.985, 381.750 173.387 C 382.438 173.789, 383 173.873, 383 173.572 C 383 171.546, 367.387 167.566, 366.305 169.316 M 438.549 169.677 C 433.602 172.355, 429.847 179.592, 430.906 184.408 C 431.016 184.908, 430.519 185.689, 429.803 186.143 C 429.064 186.612, 428.971 186.976, 429.588 186.985 C 430.186 186.993, 430.733 188.527, 430.804 190.394 C 431.362 205.247, 453 210.972, 453 196.267 C 453 195.203, 453.283 194.050, 453.629 193.704 C 454.727 192.607, 454.317 179.087, 453.143 177.672 C 452.524 176.926, 452.250 176.083, 452.535 175.798 C 453.406 174.927, 445.111 167.997, 443.247 168.040 C 442.286 168.062, 440.172 168.799, 438.549 169.677 M 75.500 192.681 C 40.366 213.186, 25.200 214.987, 15.500 199.804 C 11.061 192.856, 10.992 193.129, 11.100 217.250 C 11.161 230.871, 11.529 238.530, 12.048 237 L 12.897 234.500 12.852 238.500 C 12.827 240.700, 12.906 242.838, 13.028 243.250 C 13.150 243.662, 13.313 244.338, 13.390 244.750 C 13.467 245.162, 13.888 246.063, 14.324 246.750 C 14.761 247.438, 14.856 248, 14.535 248 C 12.787 248, 21.202 255.568, 25.217 257.606 C 31.913 261.005, 42 260.842, 42 257.334 C 42 256.535, 41.654 256.096, 41.232 256.357 C 39.995 257.121, 41.129 248.574, 42.372 247.765 C 43.063 247.315, 42.726 246.998, 41.500 246.945 L 39.500 246.859 41.500 246 L 43.500 245.141 41.312 245.070 C 39.788 245.021, 39.168 244.414, 39.270 243.069 C 39.350 242.007, 39.714 241.323, 40.080 241.549 C 41.073 242.163, 56.706 236.691, 63 233.526 C 86.197 221.863, 100.717 201.538, 92.927 191.635 L 90.855 189 86.177 189.089 C 82.749 189.155, 79.897 190.114, 75.500 192.681" stroke="none" fill="#9f35d9" fill-rule="evenodd"/></svg>
      </div>
    </Link>
  );
}

export default Logo;