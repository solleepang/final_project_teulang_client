import React from "react";
// import { useSelector } from "react-redux";
import Search from "../../component/Search";
import Row from "../../component/Row";
import requests from "../../api/recipes/requests";

const Main = () => {
  // const users = useSelector(({ users }) => {
  //   return users;
  // });

  // console.log("redux data: ", users);

  return (
    <div>
      <Row
        title="인기 레시피 (북마크 개수 많은 순)"
        id="PR"
        fetchUrl={requests.fetchRecipeList}
      />
      <Row title="최신 레시피" id="LR" fetchUrl={requests.fetchRecipeList} />
    </div>
  );
};

export default Main;
