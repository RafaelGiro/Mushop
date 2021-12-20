type variant =
  | "title-1"
  | "title-2"
  | "title-3"
  | "body-1"
  | "label"
  | "header";

interface styleI {
  fontSize: string;
  fontFamily: string;
  letterSpacing: number;
}

export const variants: Record<variant, styleI> = {
  "title-1": {
    fontSize: "48px",
    fontFamily: "Merriweather_900Black",
    letterSpacing: 0,
  },
  "title-2": {
    fontSize: "20px",
    fontFamily: "Merriweather_900Black",
    letterSpacing: 10,
  },
  "title-3": {
    fontSize: "16px",
    fontFamily: "Merriweather_900Black",
    letterSpacing: 10,
  },
  header: {
    fontSize: "16px",
    fontFamily: "Merriweather_900Black",
    letterSpacing: 25,
  },
  "body-1": {
    fontSize: "16px",
    fontFamily: "Merriweather_400Regular",
    letterSpacing: 0,
  },
  label: {
    fontSize: "12px",
    fontFamily: "Merriweather_700Bold",
    letterSpacing: 0,
  },
};
