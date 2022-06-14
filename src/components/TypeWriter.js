import { Typography } from "@mui/material";
import { useTypewriter } from "react-simple-typewriter";

export const TypeWriter = (props) => {
  const { text } = useTypewriter({
    words: [
      "Eat",
      "Sleep",
      "Ride Motorcycles",
      "Repeat",
      "Keep quiet and ride",
      "Every day is a good day for a ride",
      "When you are in doubt, throttle it out",
      "A bike on the road is worth two in the shed",
      "A long, long ride in your bike will clear your mind",
      "A long ride can restore your balance, and make you feel better",
    ],
    loop: 0,
  });
  return (
    <div
      style={{
        display: props.flex,
        alignItems: props.center,
        justifyContent: props.center,
      }}
    >
      <Typography
        variant={props.variant}
        sx={{ color: props.color, fontSize: props.size }}
      >
        {text} |
      </Typography>
    </div>
  );
};


