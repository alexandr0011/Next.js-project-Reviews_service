"use client";

import { useState, useEffect, KeyboardEvent } from "react";
import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "./star.svg";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map(
      (ratingElem: JSX.Element, i: number) => {
        return (
          <span
            key={i}
            className={cn(styles.star, {
              [styles.filled]: i < currentRating,
              [styles.editable]: isEditable,
            })}
            onMouseEnter={() => changeDisplay(i + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => onClick(i + 1)}
          >
            <StarIcon
              tabIndex={isEditable ? 0 : -1}
              onKeyDown={(e: KeyboardEvent<SVGElement>) =>
                isEditable && handleSpace(i + 1, e)
              }
            />
          </span>
        );
      }
    );
    setRatingArray(updatedArray);
  };

  const changeDisplay = (item: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(item);
  };

  const onClick = (item: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(item);
  };

  const handleSpace = (item: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== "Space" || !setRating) {
      return;
    }
    setRating(item);
  };

  return (
    <div {...props}>
      {ratingArray.map((ratingElem: JSX.Element, i: number) => (
        <span key={i}>{ratingElem}</span>
      ))}
    </div>
  );
};
