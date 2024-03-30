type PropsType = {
  color: string;
  onClick: () => void;
};

export default function Like({ color, onClick }: PropsType) {
  return (
    <svg
      cursor="pointer"
      width="28"
      height="25"
      viewBox="0 0 28 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.666656 24.6667H3.33332C4.06666 24.6667 4.66666 24.0667 4.66666 23.3333V11.3333C4.66666 10.6 4.06666 10 3.33332 10H0.666656V24.6667ZM27.1067 15.1733C27.2533 14.84 27.3333 14.48 27.3333 14.1067V12.6667C27.3333 11.2 26.1333 10 24.6667 10H17.3333L18.56 3.8C18.6267 3.50667 18.5867 3.18667 18.4533 2.92001C18.1467 2.32001 17.76 1.77334 17.28 1.29334L16.6667 0.666672L8.11999 9.21334C7.61332 9.72001 7.33332 10.4 7.33332 11.1067V21.56C7.33332 23.2667 8.73332 24.6667 10.4533 24.6667H21.2667C22.2 24.6667 23.08 24.1733 23.56 23.3733L27.1067 15.1733Z"
        fill={color}
        fill-opacity="0.54"
        onClick={onClick}
      />
    </svg>
  );
}
