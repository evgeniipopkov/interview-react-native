/* eslint-disable max-len */
import React from 'react';
import { View } from 'react-native';

import Svg, {
  G,
  Path,
  Rect,
} from 'react-native-svg';

import { width } from 'constants/sizes';

const originalWidth = 160;
const originalHeight = 108;
const aspectRatio = originalWidth / originalHeight;

export default () => (
  <View style={{ width: width * 0.43, aspectRatio }}>
    <Svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${originalWidth} ${originalHeight}`}
    >
      <G clipPath="url(#a)">
        <Rect y={30.54} width={160} height={77.46} rx={12} fill="#CEECFE" />
      </G>
      <G clipPath="url(#b)">
        <G>
          <Path
            d="m107.906 61.936-27.547-12-10.702 3.246 18.397 17.315 19.852-8.561Z"
            fill="#F9ACC0"
          />
          <Path
            d="m16.27 67.611-.589 20.682 6.602-2.405-2.045 21.643 58.317.241-3.968-32.706 15.511-4.81-8.417-18.998s-21.967 1.984-35.47 5.17c-8.465 1.997-15.968 5.22-18.758 6.374-7.215 3.006-11.182 4.81-11.182 4.81Z"
            fill="#3D5CFF"
          />
          <Path
            d="M35.63 25.166c-3.849 2.886-4.57 9.259-6.133 12.866-1.563 3.607-2.285 4.57-3.728 6.012-1.442 1.443-3.486 1.804-3.486 1.804s5.17 8.537 19.478 7.815c14.309-.721 21.042-6.733 23.568-9.138 2.525-2.405 3.607-5.771 3.607-5.771s-6.854-.361-9.74-6.133c-2.886-5.771-6.252-9.619-10.46-9.619-4.209 0-6.013 1.683-6.013 1.683s-3.246-2.404-7.094.481Z"
            fill="#1F1F39"
          />
          <Path
            d="m16.006 88.184 6.277-2.296-.349 3.763 1.31-10.99-7.238 9.523ZM75.32 81.078l-.733-6.012 3.463-1.07-5.062-8.73 2.333 15.812Z"
            fill="#224BF4"
          />
          <Path
            d="M61.457 67.467c-.132.397-.505.65-.842.866-.373.24-.757.48-.986.865a1.606 1.606 0 0 0 .698 2.297c.228.108.42-.229.192-.337a1.227 1.227 0 0 1-.721-.901c-.085-.433.084-.866.408-1.167.59-.553 1.563-.841 1.66-1.755.06-.517-.277-.95-.59-1.323-.144-.18-.42.096-.264.289.264.324.59.721.445 1.166ZM28.415 105.74c.036.3-.133.577-.337.781-.457.457-1.082.673-1.467 1.202-.144.205.192.397.337.193.216-.289.54-.481.841-.673.29-.193.578-.409.782-.698a1.17 1.17 0 0 0 .216-.95c-.072-.373-.324-.685-.565-.962-.156-.204-.433.072-.276.265.204.24.433.517.469.842ZM67.998 75.499c-.204.433-.577.697-.974.95-.373.228-.77.48-.986.866-.276.469-.204 1.022.06 1.479.313.553.89.89 1.42 1.202.216.12.408-.204.192-.337-.47-.264-.974-.553-1.263-1.022-.252-.42-.289-.925.048-1.31.289-.325.697-.517 1.058-.758.397-.276.71-.625.878-1.082a2.163 2.163 0 0 0-.048-1.6c-.036-.095-.18-.12-.265-.071-.108.06-.12.18-.084.264.192.445.168.974-.036 1.419ZM34.487 94.136c.036-.336.06-.697 0-1.034-.096-.589-.601-.998-1.178-1.082-.35-.048-.698 0-1.034.108-.301.097-.59.24-.902.325-.313.084-.614.084-.866-.144-.216-.193-.36-.457-.457-.734a2.1 2.1 0 0 1 .229-1.816c.132-.204-.193-.396-.337-.192a2.486 2.486 0 0 0-.373 1.672c.072.565.349 1.178.842 1.502.589.385 1.25.025 1.827-.18.553-.192 1.299-.288 1.708.24.228.301.192.722.168 1.07a6.286 6.286 0 0 1-.204 1.263c-.048.217.324.325.385.084.096-.348.156-.709.192-1.082ZM69.73 95.363c-.626-.024-1.07.553-1.516.913-.913.746-2.272 1.251-3.342.505-.481-.336-.83-.925-.722-1.538.048-.241-.324-.35-.373-.109-.204 1.118.734 2.153 1.792 2.357.613.12 1.239-.012 1.804-.252.589-.253 1.07-.65 1.539-1.07.216-.193.505-.458.817-.41.205.025.505.253.373.481-.084.205.24.397.36.18.277-.492-.228-1.033-.733-1.057ZM55.806 83.194c-.012.602-.445 1.01-.902 1.323-.493.349-1.01.65-1.323 1.178-.288.481-.337 1.095.06 1.527.41.433 1.07.493 1.624.421.108-.012.156-.144.132-.24-.024-.108-.132-.145-.24-.133-.433.06-.999 0-1.287-.372-.36-.47 0-1.058.349-1.407.396-.397.913-.625 1.322-.998.421-.373.674-.878.637-1.443-.048-.661-.396-1.262-.841-1.743-.169-.169-.433.108-.265.288.397.433.746.998.734 1.6ZM51.429 98.405c.12.228.168.493.144.745-.036.3-.192.578-.337.842-.156.277-.324.553-.396.866a1.71 1.71 0 0 0 .012.853 1.77 1.77 0 0 0 1.106 1.227 1.8 1.8 0 0 0 1.816-.409c.18-.168-.097-.445-.277-.276a1.413 1.413 0 0 1-1.515.288c-.493-.216-.818-.757-.806-1.286 0-.614.47-1.095.674-1.636a1.74 1.74 0 0 0-.169-1.539c-.312-.517-.865-.878-1.479-.89-.24-.024-.24.373 0 .373.53.012.986.373 1.227.842ZM37.565 62.453c.193.493.157 1.01-.036 1.49-.204.542-.577.939-.974 1.348-.337.348-.721.853-.457 1.358.145.265.445.397.722.493.336.12.71.169 1.07.145.252-.013.252-.397 0-.385a2.624 2.624 0 0 1-.914-.12c-.216-.073-.541-.18-.565-.445-.024-.229.156-.457.288-.626.18-.204.385-.384.553-.589.698-.817 1.095-1.924.626-2.946a1.847 1.847 0 0 0-1.154-1.046c-.241-.06-.35.313-.109.385.445.132.782.505.95.938ZM46.33 71.88c-.697.132-1.154.613-1.418 1.25-.265.638-.325 1.42-.842 1.912-.264.253-.625.373-.974.433-.348.06-.733.072-1.082-.012-.794-.204-1.419-.89-1.707-1.635-.085-.229-.457-.133-.373.108.277.71.77 1.347 1.455 1.695.65.337 1.455.361 2.152.145.36-.109.698-.301.938-.602.229-.276.373-.613.493-.962.204-.625.337-1.394.95-1.767.613-.36 1.455-.277 1.936.264.156.18.433-.084.264-.276-.445-.493-1.142-.674-1.791-.553ZM68.443 53.483c-.53.289-.902.782-1.347 1.166-.216.193-.457.349-.733.421-.373.096-.758.036-1.106-.096-.361-.132-.722-.313-.986-.59a2.61 2.61 0 0 1-.566-.985c-.072-.24-.444-.132-.372.108.204.65.589 1.227 1.19 1.563.625.349 1.395.59 2.092.325.565-.217.962-.686 1.395-1.094.409-.397.878-.722 1.479-.638.601.085 1.154.53 1.299 1.13.072.241.445.133.384-.108-.276-1.154-1.695-1.767-2.73-1.202ZM33.513 78.577c.132.53-.084 1.07-.156 1.587-.072.481-.048.986.252 1.383.265.349.71.565 1.154.553.518-.012.986-.313 1.275-.733.144-.205-.192-.397-.337-.193-.24.349-.649.577-1.082.541a1.014 1.014 0 0 1-.89-.757c-.228-.938.542-1.948-.011-2.838-.241-.385-.698-.661-1.167-.517-.228.06-.12.433.12.36.397-.131.758.253.842.614ZM55.794 56.862a3.698 3.698 0 0 1-.854 1.851c-.541.638-1.25 1.095-1.996 1.455-.998.481-2.08.794-3.15 1.07-1.624.41-3.38.686-5.05.373-1.07-.204-2.069-.661-2.838-1.407-.625-.6-1.07-1.322-1.467-2.104a2.4 2.4 0 0 1-.12-.252c-.109-.229-.445-.024-.337.192.397.794.842 1.563 1.443 2.225A5.66 5.66 0 0 0 44.25 61.9c1.636.409 3.38.228 5.002-.132 1.143-.253 2.285-.578 3.355-1.023.83-.348 1.647-.805 2.297-1.43a4.217 4.217 0 0 0 1.154-1.888c.216-.746.192-1.527.048-2.285a5.95 5.95 0 0 0-.156-.625c-.06-.24-.433-.132-.36.108.203.722.324 1.491.203 2.237Z"
            fill="#fff"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m77.407 52.005 7.817 19.964-.224.087-7.816-19.963.224-.088Z"
            fill="#fff"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m83.401 67.597.066.231-9.626 2.726-.065-.231 9.625-2.726Z"
            fill="#fff"
          />
          <Path
            d="M80.419 55.768c-11.423-6.253-17.796-9.98-17.796-9.98s-3.126-.722-4.69-2.044c-1.562-1.323.422-8.237.422-8.237s-1.263-4.148-.661-4.509c.6-.36 1.442-.721 3.486 1.082 2.044 1.804 3.006 4.93 3.006 4.93s25.732 3.487 33.187 6.132c7.455 2.646 13.948 5.892 13.347 13.467-.602 7.575-8.417 6.613-8.417 6.613s-10.461-1.202-21.884-7.454Z"
            fill="#F9D2DD"
          />
          <Path
            d="M57.934 33.968c.204.842.42 1.539.42 1.539s-1.983 6.914-.42 8.236c.758.638 1.888 1.143 2.838 1.491.998-1.274 2.392-3.57 1.911-6.12-.529-2.801-3.294-4.46-4.75-5.146Z"
            fill="#F9ACC0"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M57.468 43.227c-1.964.245-3.805-1.56-4.113-4.03-.308-2.472 1.034-4.674 2.998-4.918 1.963-.245 3.805 1.56 4.113 4.03.308 2.472-1.034 4.674-2.998 4.919Z"
            fill="#F99A3D"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M56.613 42.076c-1.424.097-2.677-1.275-2.798-3.064-.121-1.79.935-3.318 2.36-3.414 1.424-.097 2.677 1.275 2.798 3.064.121 1.79-.935 3.318-2.36 3.414Z"
            fill="#FF7F2D"
          />
          <Path
            d="M35.63 42.721c-.337 3.403 5.17 4.81 5.17 4.81s1.322 4.57 1.563 7.094c.24 2.525 0 4.93 0 4.93s2.513 1.744 6.613.842c4.93-1.082 5.17-3.126 5.17-3.126l-1.924-7.936s3.584-.962 4.45-5.531c.841-4.45-.602-9.86-.602-9.86l-6.132 1.202-1.924-1.683v2.044l-5.771 1.563-1.564-1.683s1.083 1.322.481 4.328c-.6 3.006-.961 3.127-.961 3.127l-.241-2.165s-3.848-2.885-4.329 2.044Z"
            fill="#F9D2DD"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M44.85 43.576c-1.365.249-2.595-.227-2.748-1.063-.152-.837.831-1.716 2.196-1.965 1.366-.25 2.596.227 2.749 1.063.152.836-.831 1.716-2.196 1.965Z"
            fill="#F9ACC0"
          />
          <Path
            d="M52.283 36.65c.144-.29.444-.542.793-.626.169-.036.325-.048.493-.036.169.012.337.06.481.144.3.169.505.493.457.806a1.225 1.225 0 0 0-.661-.277 1.258 1.258 0 0 0-.3 0 .705.705 0 0 0-.157.024c-.06 0-.096.024-.144.024-.085.024-.18.049-.253.097a1.023 1.023 0 0 0-.252.168 9.321 9.321 0 0 0-.518.577 1.128 1.128 0 0 1 .06-.902ZM44.635 38.273c.12-.265.349-.53.686-.65.048-.012.084-.024.132-.036l.06-.012H45.718c.036 0 .072 0 .12.012.156.024.312.06.457.144a.969.969 0 0 1 .348.35c.036.071.06.143.072.228a.492.492 0 0 1-.012.228 1.382 1.382 0 0 0-.312-.204c-.096-.036-.193-.048-.289-.06h-.36c-.024 0-.036.012-.06.012h-.025l-.024.012c-.012 0-.036.012-.048.012-.132.048-.3.156-.469.3-.192.145-.36.325-.589.505a1.354 1.354 0 0 1 .108-.841ZM50.684 38.417c.132.108.252.228.36.373.108.144.193.3.229.493a.778.778 0 0 1-.012.288.428.428 0 0 1-.049.132.324.324 0 0 1-.06.133.988.988 0 0 1-.372.397 1.45 1.45 0 0 1-.986.204c.324-.072.637-.18.878-.373a.754.754 0 0 0 .264-.349c.024-.036.024-.072.036-.096.012-.036.024-.072.024-.096a.584.584 0 0 0 0-.204 1.042 1.042 0 0 0-.168-.397c-.084-.132-.193-.24-.3-.36-.193-.23-.446-.434-.71-.65.312.12.601.288.866.505Z"
            fill="#1F1F39"
          />
          <Path
            d="M50.43 41.892c1.432-.289 2.105-.842 2.105-.842s.818 2.658-.096 3.571c-.914.914-3.27 1.058-3.884-.613-.613-1.683-.409-2.044-.409-2.044s1.082.168 2.285-.072Z"
            fill="#F95368"
          />
          <Path
            d="M52.764 43.996a3.42 3.42 0 0 0-2.057-.084 3.73 3.73 0 0 0-1.599.902c.95.77 2.585.54 3.319-.193.168-.168.264-.385.337-.625ZM41.16 39.727c-.6 3.007-.961 3.127-.961 3.127l-.241-2.165s-.108-.084-.3-.192l-2.43 5.35c1.528 1.167 3.572 1.684 3.572 1.684s.12.397.276 1.022c.517-.553 1.31-1.767 1.948-4.377.758-3.078-.806-4.942-1.695-5.711a8.71 8.71 0 0 1-.169 1.262Z"
            fill="#F9ACC0"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M39.583 47.507c-2.18.148-4.097-1.95-4.282-4.687-.186-2.736 1.431-5.074 3.61-5.222 2.18-.148 4.098 1.95 4.283 4.687.186 2.737-1.43 5.074-3.61 5.222Z"
            fill="#F99A3D"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M39.059 45.563c-1.425.096-2.678-1.275-2.8-3.064-.12-1.79.936-3.318 2.36-3.414 1.425-.097 2.678 1.275 2.8 3.064.12 1.79-.936 3.318-2.36 3.414Z"
            fill="#FF7F2D"
          />
          <Path
            d="M35.99 28.293c-1.49 2.801-1.563 4.328-1.683 6.613-.12 2.284.48 4.81.48 4.81l2.754-1.203s-.854-5.711.493-9.018c.818-2.032 2.08-3.247 3.09-3.956.072-.048.517-.337.89-.541.12-.06.228-.108.313-.156l.397-.157s.589-.348 1.082-.6c.721-.361 1.803-.722 1.803-.722s-2.549-.878-5.05.24c0 0-2.645 1.082-4.569 4.69Z"
            fill="#F99A3D"
          />
          <Path
            d="M46.054 105.848c-2.056-.433-4.317-1.131-5.41-2.91-.794-1.287-.89-2.994-.301-5.195.637-2.392 2.73-4.388 5.146-6.697 3.15-3.006 6.721-6.42 8.08-11.7 1.78-6.925-4.485-12.023-9.042-15.75-1.527-1.24-2.838-2.31-3.655-3.271-1.383-1.636-2.14-4.341-2.237-8.02-.072-2.73.253-5.014.253-5.026.024-.133.144-.229.276-.205a.252.252 0 0 1 .205.277c-.012.084-1.275 8.958 1.863 12.673.782.926 2.08 1.984 3.584 3.21 4.665 3.8 11.062 9.018 9.21 16.245-1.383 5.41-5.014 8.874-8.212 11.928-2.37 2.236-4.413 4.184-5.014 6.457-.554 2.068-.47 3.655.252 4.821.794 1.299 2.32 2.105 5.098 2.694 3.884.817 6.866.481 6.89.481.132-.012.252.084.265.204.012.132-.085.253-.205.265-.06.012-.697.084-1.755.084-1.275 0-3.139-.108-5.29-.565Z"
            fill="#1F1F39"
          />
          <Path
            d="M50.298 68.874a.244.244 0 0 1 .037-.337c.072-.06 7.106-5.723 9.114-12.661 1.996-6.926-.914-12.878-.95-12.938a.241.241 0 0 1 .108-.325.241.241 0 0 1 .325.108c.036.06 3.03 6.18.974 13.275-2.044 7.082-9.199 12.842-9.27 12.902-.037.06-.097.072-.145.072a.251.251 0 0 1-.193-.096ZM47.725 87.896l.421-.421a.965.965 0 0 1 1.359 0 .965.965 0 0 1 0 1.359l-.42.42a.965.965 0 0 1-1.36 0 .965.965 0 0 1 0-1.358Z"
            fill="#1F1F39"
          />
          <Path
            d="M52.294 49.66c.049-.193-1.514.408-3.198.408-2.777 0-3.727-.601-3.727-.601s2.645 3.367 5.41 4.449c1.107.42 2.02.613 2.718.685l-1.203-4.942Z"
            fill="#F9ACC0"
          />
          <Path
            d="M44.972 49.443c-.06-.024-.084-.096-.06-.144.024-.06.096-.084.144-.06.024.012 1.9.793 4.04.709 1.179-.048 2.225-.217 3.126-.517.06-.024.12.012.145.072.024.06-.012.12-.072.144-.926.313-1.996.493-3.199.53h-.3c-2.056 0-3.8-.734-3.824-.734Z"
            fill="#1F1F39"
          />
          <Path
            d="M53.245 107.531a1.39 1.39 0 0 1-1.383-1.383 1.39 1.39 0 0 1 1.383-1.382h18.998a1.39 1.39 0 0 1 1.382 1.382c0 .77-.613 1.383-1.382 1.383H53.245Z"
            fill="#EAEAFF"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m24.207 72.18-1.924 13.708Z"
            fill="#1F1F39"
          />
          <Path
            d="M22.27 86.008c-.06-.012-.108-.06-.096-.132l1.924-13.708c.012-.06.06-.108.132-.096.06.012.108.06.096.132l-1.923 13.708a.13.13 0 0 1-.12.096h-.013Z"
            fill="#1F1F39"
          />
          <Path
            d="M27.694 38.032c.841-2.044 3.847-4.701 4.689-4.93 1.322-.36 1.683.481 1.683.481s.962-.841 1.924-.48c.962.36 1.082 1.322 1.082 1.322s.89-.71 1.924-.12c.842.48.601 1.683 0 2.404-.601.722-2.405 2.045-2.525 2.766-.12.721 3.006 8.417 1.563 13.587-1.443 5.17-13.106 25.611-18.517 32.345-5.41 6.733-12.385 5.771-14.549 4.088-2.164-1.683-6.012-6.493-2.645-12.986 3.366-6.493 25.37-29.58 25.37-29.58s-.841-6.853 0-8.897Z"
            fill="#F9D2DD"
          />
          <Path
            d="M33.477 42.625c-.036-.168-.842-4.28.505-5.747 1.322-1.443 3.006-2.537 3.03-2.55.048-.035.12-.023.156.037.036.048.024.12-.036.156-.012.012-1.683 1.094-2.982 2.501-1.274 1.383-.457 5.507-.457 5.555a.11.11 0 0 1-.084.133c0 .011-.012.011-.024.011-.048 0-.096-.036-.108-.096ZM29.99 40.93c-.012-.132-.228-3.307.866-4.653 1.082-1.323 3.126-2.778 3.15-2.79a.114.114 0 0 1 .156.024.114.114 0 0 1-.024.156c-.024.012-2.044 1.455-3.102 2.742-1.046 1.274-.818 4.46-.818 4.485 0 .084-.048.132-.12.144.012 0 .012 0 0 0a.108.108 0 0 1-.108-.108Z"
            fill="#1F1F39"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m72.784 64.004 1.803 11.063Z"
            fill="#1F1F39"
          />
          <Path
            d="m74.479 75.09-1.804-11.062c-.012-.06.037-.12.097-.132.06-.012.12.036.132.096l1.803 11.062c.013.06-.036.12-.096.132h-.024c-.06 0-.108-.036-.108-.096Z"
            fill="#1F1F39"
          />
          <Path
            d="M49.192 42.577c.013.145.145.24.289.217l1.178-.193c.626-.12 1.179-.312 1.179-.312a.26.26 0 0 0 .216-.301l-.132-.59c-.349.17-.842.361-1.503.494-.457.084-.914.12-1.287.12l.06.565Z"
            fill="#fff"
          />
          <Path
            d="M1.505 78.433C-.287 83.94 3.02 87.98 4.968 89.495c2.164 1.683 9.138 2.645 14.55-4.088.528-.661 1.13-1.467 1.767-2.369-2.61 1.732-7.888 4.389-13.431 2.249-3.884-1.491-5.603-4.353-6.349-6.854ZM55.601 37.9c-1.359.252-2.344 1.13-2.188 1.972.156.842 1.383 1.322 2.741 1.07.277-.048.541-.132.782-.228 0-.998-.072-1.972-.169-2.85a3.843 3.843 0 0 0-1.166.036Z"
            fill="#F9ACC0"
          />
        </G>
      </G>
      <G clipPath="url(#d)">
        <Path
          d="M160 74.947V98.86H90.17c-6.603 0-11.957-5.353-11.957-11.957 0-6.604 5.354-11.957 11.957-11.957H160Z"
          fill="#F3FBFF"
        />
        <Path
          d="M88.146 89.79h3.29v1.287H86.55v-9.73h1.596v8.442Zm4.093-2.605c0-.775.158-1.46.476-2.058a3.556 3.556 0 0 1 3.164-1.89c.606 0 1.134.122 1.582.364.457.234.821.528 1.092.882v-1.12h1.61v7.714h-1.61V89.93c-.271.364-.64.668-1.106.91-.467.243-.999.364-1.596.364-.663 0-1.27-.168-1.82-.504a3.74 3.74 0 0 1-1.316-1.428c-.318-.616-.476-1.311-.476-2.086Zm6.314.028c0-.532-.112-.994-.336-1.386-.215-.392-.5-.69-.854-.896a2.253 2.253 0 0 0-1.148-.308c-.411 0-.794.103-1.148.308-.355.196-.644.49-.868.882-.215.383-.322.84-.322 1.372 0 .532.107.999.322 1.4.224.402.513.71.868.924.364.206.746.308 1.148.308.41 0 .793-.102 1.148-.308.354-.205.639-.504.854-.896.224-.401.336-.868.336-1.4Zm7.598-3.976c.607 0 1.148.126 1.624.378.485.252.863.626 1.134 1.12.271.495.406 1.092.406 1.792v4.55h-1.582v-4.312c0-.69-.173-1.218-.518-1.582-.345-.373-.817-.56-1.414-.56s-1.073.187-1.428.56c-.345.364-.518.891-.518 1.582v4.312h-1.596v-7.714h1.596v.882c.261-.317.593-.565.994-.742a3.252 3.252 0 0 1 1.302-.266Zm8.308 0c.597 0 1.124.122 1.582.364.466.234.83.528 1.092.882v-1.12h1.61v7.84c0 .71-.15 1.34-.448 1.89-.299.56-.733.999-1.302 1.316-.56.317-1.232.476-2.016.476-1.046 0-1.914-.247-2.604-.742a2.688 2.688 0 0 1-1.176-1.988h1.582c.121.401.378.724.77.966.401.252.877.378 1.428.378.644 0 1.162-.196 1.554-.588.401-.392.602-.961.602-1.708v-1.288c-.271.364-.64.672-1.106.924-.458.243-.98.364-1.568.364a3.525 3.525 0 0 1-1.848-.504 3.732 3.732 0 0 1-1.316-1.428c-.318-.616-.476-1.311-.476-2.086 0-.775.158-1.46.476-2.058a3.549 3.549 0 0 1 3.164-1.89Zm2.674 3.976c0-.532-.112-.994-.336-1.386-.215-.392-.5-.69-.854-.896a2.256 2.256 0 0 0-1.148-.308 2.25 2.25 0 0 0-1.148.308c-.355.196-.644.49-.868.882-.215.383-.322.84-.322 1.372 0 .532.107.999.322 1.4.224.402.513.71.868.924a2.301 2.301 0 0 0 2.296 0c.354-.205.639-.504.854-.896.224-.401.336-.868.336-1.4Zm10.692-3.85v7.714h-1.596v-.91c-.252.317-.583.57-.994.756a3.152 3.152 0 0 1-1.288.266 3.5 3.5 0 0 1-1.638-.378 2.786 2.786 0 0 1-1.134-1.12c-.271-.495-.406-1.092-.406-1.792v-4.536h1.582v4.298c0 .69.173 1.223.518 1.596.345.364.817.546 1.414.546s1.069-.182 1.414-.546c.355-.373.532-.905.532-1.596v-4.298h1.596Zm1.574 3.822c0-.775.159-1.46.476-2.058a3.556 3.556 0 0 1 3.164-1.89c.607 0 1.134.122 1.582.364.457.234.821.528 1.092.882v-1.12h1.61v7.714h-1.61V89.93c-.271.364-.639.668-1.106.91-.467.243-.999.364-1.596.364a3.427 3.427 0 0 1-1.82-.504 3.74 3.74 0 0 1-1.316-1.428c-.317-.616-.476-1.311-.476-2.086Zm6.314.028c0-.532-.112-.994-.336-1.386a2.261 2.261 0 0 0-.854-.896 2.253 2.253 0 0 0-1.148-.308c-.411 0-.793.103-1.148.308-.355.196-.644.49-.868.882-.215.383-.322.84-.322 1.372 0 .532.107.999.322 1.4.224.402.513.71.868.924.364.206.747.308 1.148.308.411 0 .793-.102 1.148-.308.355-.205.639-.504.854-.896.224-.401.336-.868.336-1.4Zm6.814-3.976c.597 0 1.125.122 1.582.364.467.234.831.528 1.092.882v-1.12h1.61v7.84c0 .71-.149 1.34-.448 1.89-.299.56-.733.999-1.302 1.316-.56.317-1.232.476-2.016.476-1.045 0-1.913-.247-2.604-.742a2.688 2.688 0 0 1-1.176-1.988h1.582c.121.401.378.724.77.966.401.252.877.378 1.428.378.644 0 1.162-.196 1.554-.588.401-.392.602-.961.602-1.708v-1.288c-.271.364-.639.672-1.106.924-.457.243-.98.364-1.568.364a3.525 3.525 0 0 1-1.848-.504 3.74 3.74 0 0 1-1.316-1.428c-.317-.616-.476-1.311-.476-2.086 0-.775.159-1.46.476-2.058a3.556 3.556 0 0 1 3.164-1.89Zm2.674 3.976c0-.532-.112-.994-.336-1.386a2.261 2.261 0 0 0-.854-.896 2.253 2.253 0 0 0-1.148-.308c-.411 0-.793.103-1.148.308-.355.196-.644.49-.868.882-.215.383-.322.84-.322 1.372 0 .532.107.999.322 1.4.224.402.513.71.868.924.364.206.747.308 1.148.308.411 0 .793-.102 1.148-.308.355-.205.639-.504.854-.896.224-.401.336-.868.336-1.4Zm10.776-.182c0 .29-.018.55-.056.784h-5.894c.047.616.276 1.11.686 1.484.411.373.915.56 1.512.56.859 0 1.466-.36 1.82-1.078h1.722a3.496 3.496 0 0 1-1.274 1.75c-.606.448-1.362.672-2.268.672-.737 0-1.4-.163-1.988-.49a3.667 3.667 0 0 1-1.372-1.4c-.326-.606-.49-1.306-.49-2.1 0-.793.159-1.488.476-2.086a3.45 3.45 0 0 1 1.358-1.4c.588-.327 1.26-.49 2.016-.49.728 0 1.377.159 1.946.476.57.318 1.013.766 1.33 1.344.318.57.476 1.227.476 1.974Zm-1.666-.504c-.009-.588-.219-1.06-.63-1.414-.41-.355-.919-.532-1.526-.532-.55 0-1.022.177-1.414.532-.392.346-.625.817-.7 1.414h4.27Z"
          fill="#3D5CFF"
        />
      </G>
    </Svg>
  </View>
);
