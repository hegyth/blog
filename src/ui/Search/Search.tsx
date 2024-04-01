/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-rest-params */
import { useState } from "react";
import serchIcon from "../../assets/SearchIcon.png";
import { setSearchPost } from "../../redux/features/searchSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { PostType } from "../../types";
import css from "./Index.module.scss";

export default function Search() {
  const dispatch = useAppDispatch();
  const posts: PostType[] = useAppSelector((state) => state.post.value);

  const [errorSearchMessage, setErrorSearchMessage] = useState<string | null>(
    null
  );

  const debounce = (fn: (e: React.ChangeEvent<HTMLInputElement>) => void) => {
    let timer: ReturnType<typeof setTimeout>;
    return function (this: any) {
      const fnCall = () => {
        fn.apply(this, arguments as unknown as Parameters<typeof fn>);
      };
      clearTimeout(timer);
      timer = setTimeout(fnCall, 500);
    };
  };

  function search(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.value) {
      setErrorSearchMessage(null);
      dispatch(setSearchPost(null));
    }
    let actionFlag = false;
    posts.map((el: PostType) => {
      if (el.title == e.target.value) {
        actionFlag = true;
        dispatch(setSearchPost(el));
      }
      return el;
    });
    if (!actionFlag && e.target.value) {
      setErrorSearchMessage("По вашему запросу ничего не найдено");
    } else setErrorSearchMessage(null);
  }

  return (
    <>
      <div className={css.search}>
        <input
          type="text"
          placeholder="Поиск по названию статьи"
          onChange={debounce(search)}
        />
        <img src={serchIcon} alt="serchIcon" />
      </div>
      {errorSearchMessage ? (
        <span className={css.errorMessage}>{errorSearchMessage}</span>
      ) : null}
    </>
  );
}
