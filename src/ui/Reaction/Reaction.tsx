import { setReaction } from "../../redux/features/reactionSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { PostType, ReactionType } from "../../types";
import Dislike from "../ReactionIcons/Dislike";
import Like from "../ReactionIcons/Like";
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
            <Like color={"green"} onClick={setLike} />
            <span>{post?.like + 1}</span>
          </div>
          <div className={css.mark} >
            <Dislike color={"grey"} onClick={setDislike}/>
            <span>{post?.dislike}</span>
          </div>
        </>
      ) : reactions.find(
          (el) => el.id == post?.id && el.reaction == "dislike"
        ) ? (
        <>
          <div className={css.mark}>
            <Like color={"grey"} onClick={setLike} />
            <span>{post?.like}</span>
          </div>
          <div className={css.mark}>
            <Dislike color={"red"} onClick={setDislike}/>
            <span>{post?.dislike + 1}</span>
          </div>
        </>
      ) : (
        <>
          <div className={css.mark}>
            <Like color={"grey"} onClick={setLike} />
            <span>{post?.like}</span>
          </div>
          <div className={css.mark}>
            <Dislike color={"grey"} onClick={setDislike}/>
            <span>{post?.dislike}</span>
          </div>
        </>
      )}
    </div>
  );
}
