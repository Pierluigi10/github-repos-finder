import { MdStarHalf, MdStarOutline } from "react-icons/md";
function getRating(code) {
  // Matches for any case where the expression === `true`:
  switch (true) {
    case code <= 150:
      return <MdStarHalf />;
    case code > 150 && code <= 300:
      return <MdStarOutline />;
    case code > 300 && code <= 450:
      return (
        <span>
          <MdStarOutline />
          <MdStarHalf />
        </span>
      );
    case code > 450 && code <= 600:
      return (
        <span>
          <MdStarOutline />
          <MdStarOutline />
        </span>
      );
    case code > 750 && code <= 1000:
      return (
        <span>
          <MdStarOutline />
          <MdStarOutline />
          <MdStarHalf />
        </span>
      );
    case code > 1000 && code <= 1500:
      return (
        <span>
          <MdStarOutline />
          <MdStarOutline />
          <MdStarOutline />
        </span>
      );
    case code > 1500 && code <= 2000:
      return (
        <span>
          <MdStarOutline />
          <MdStarOutline />
          <MdStarOutline />
          <MdStarHalf />
        </span>
      );

    case code > 2000 && code <= 3000:
      return (
        <span>
          <MdStarOutline />
          <MdStarOutline />
          <MdStarOutline />
          <MdStarOutline />
          <MdStarHalf />
        </span>
      );

    case code > 3000:
      return (
        <span>
          <MdStarOutline />
          <MdStarOutline />
          <MdStarOutline />
          <MdStarOutline />
          <MdStarOutline />
        </span>
      );

    default:
  }
}

export default getRating;
