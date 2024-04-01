import { Link } from "react-router-dom";
import { PostType } from "../../types";
import Reaction from "../Reaction/Reaction";
import css from "./index.module.scss";

type PropsType = {
  post: PostType;
  searchPost: boolean;
};

export default function Post({ post, searchPost }: PropsType) {
  return (
    <div key={post?.id} className={css.post}>
      {post?.id == 1 || searchPost ? (
        <img src="https://placehold.co/1140x600" alt="error" />
      ) : (
        <img src="https://placehold.co/558x273" alt="error" />
      )}
      <div className={css.desc}>
        {post?.id == 1 || searchPost ? (
          <>
            <div className={css.title}>
              <h2>{post?.title}</h2>
              <Reaction post={post} />
            </div>
            <p>{post.body}</p>
            <div className={css.navigate}>
              <Link to={`${post?.id}`}>
                <input
                  className={css.link}
                  type="button"
                  value="Читать далее"
                />
              </Link>
            </div>
          </>
        ) : (
          <>
            <h2>{post?.title}</h2>
            <div className={css.title}>
              <Reaction post={post} />
              <Link to={`${post?.id}`}>
                <input
                  className={css.link}
                  type="button"
                  value="Читать далее"
                />
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
