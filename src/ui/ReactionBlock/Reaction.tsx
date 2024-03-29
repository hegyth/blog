import dislike from "../../assets/ThumbDownAlt.png";
import dislikeRed from "../../assets/ThumbDownAltRed.png";
import like from "../../assets/ThumbUpAlt.png";
import likeGreen from "../../assets/ThumbUpAltGreen.png";
import { setReaction } from "../../features/reactionSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { PostType, ReactionType } from "../../types";
import css from "./index.module.scss";

type PropsType = {
  post: PostType;
};

export default function Reaction({ post }: PropsType) {
  const reactions: ReactionType[] = useAppSelector(
    (state) => state.reaction.value
  );
  const dispatch = useAppDispatch();

  const setLike = () => {
    dispatch(setReaction({ id: post.id, reaction: "like" }));
  };

  const setDislike = () => {
    dispatch(setReaction({ id: post.id, reaction: "dislike" }));
  };

  return (
    <div className={css.marks}>
      {reactions.find((el) => el.id == post?.id && el.reaction == "like") ? (
        <>
          <div className={css.mark}>
            <img src={likeGreen} alt="like" onClick={setLike} />
            <span>{post?.like + 1}</span>
          </div>
          <div className={css.mark}>
            <img src={dislike} alt="dislike" onClick={setDislike} />
            <span>{post?.dislike}</span>
          </div>
        </>
      ) : reactions.find(
          (el) => el.id == post?.id && el.reaction == "dislike"
        ) ? (
        <>
          <div className={css.mark}>
            <img src={like} alt="like" onClick={setLike} />
            <span>{post?.like}</span>
          </div>
          <div className={css.mark}>
            <img src={dislikeRed} alt="dislike" onClick={setDislike} />
            <span>{post?.dislike + 1}</span>
          </div>
        </>
      ) : (
        <>
          <div className={css.mark}>
            <img src={like} alt="like" onClick={setLike} />
            <span>{post?.like}</span>
          </div>
          <div className={css.mark}>
            <img src={dislike} alt="dislike" onClick={setDislike} />
            <span>{post?.dislike}</span>
          </div>
        </>
      )}
    </div>
  );
}
