const express = require("express");
const { movies } = require("./data.json");
const cors = require("cors");

const app = express();

// TODO : 영화 API 를 위한 server를 작성하세요. server spec은 server directory test spec을 참고 해주세요.
app.use(cors());

app.get("/movies", (req, res) => res.status(200).json(movies));

app.get("/movies/:id", (req, res) => {
  const findMovie = movies.filter(ele => Number(req.params.id) === ele.id);
  if (findMovie.length !== 0) {
    return res.json(findMovie[0]);
  } else {
    return res.status(404).send("test");
  }
});

// 테스트를 위한 코드입니다. 건드리지 마세요.
if (process.env.NODE_ENV !== "test") {
  app.listen(3000, () => {
    console.log("server listen on 3000");
  });
}

module.exports = app;
