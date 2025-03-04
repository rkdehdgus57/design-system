import { StyleSprinkles } from "./style.css";

type AsProps = {
  as?: Exclude<keyof JSX.IntrinsicElements, "key">;
};

type ElementProps = Omit<React.HTMLAttributes<HTMLElement>, "as">;

export type AsElementProps = AsProps & ElementProps;

export type ColorProps = {
  color: keyof typeof vars.colors.$scale & string;
  background: keyof typeof vars.colors.$scale & string;
};

export type StyleProps = Parameters<typeof StyleSprinkles>[0] & ColorProps;
