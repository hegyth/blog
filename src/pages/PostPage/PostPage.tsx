import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import { PostType } from "../../types";
import Reaction from "../../ui/Reaction/Reaction";
import css from "./imdex.module.scss";

export default function PostPage() {
  const posts: PostType[] = useAppSelector((state) => state.post.value);

  const { id } = useParams();
  const [post, setPost] = useState<PostType>();

  useEffect(() => {
    posts.forEach((el) => {
      if (el.id == Number(id)) {
        setPost(el);
        return;
      }
    });
  }, [id, post, posts]);

  return (
    <div className={css.mainPage}>
      <div className={css.main}>
        <div className={css.navigate}>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <h2>← Вернуться к статьям</h2>
          </Link>
          {post && <Reaction post={post} />}
        </div>
        <h1>{post?.title}</h1>
        <img src="https://placehold.co/848x477" alt="img" />
        <div className={css.postBody}>
          <p>{post?.body}</p>
        </div>
      </div>
    </div>
  );
}
