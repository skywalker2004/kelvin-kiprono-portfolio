import { useEffect, useState } from "react";

type Props = { words: string[]; typingMs?: number; pauseMs?: number };

export const TypedRotator = ({ words, typingMs = 70, pauseMs = 1500 }: Props) => {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i];
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setI((p) => (p + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
      deleting ? typingMs / 2 : typingMs
    );
    return () => clearTimeout(t);
  }, [text, deleting, i, words, typingMs, pauseMs]);

  return (
    <span className="inline-flex items-baseline">
      <span className="gradient-text">{text}</span>
      <span className="ml-1 inline-block h-[1em] w-[2px] bg-primary animate-caret" />
    </span>
  );
};
