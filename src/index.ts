import { Book } from "./entities/Book";
import { Logger } from "./common/Logger";
import { Product } from "./entities/Product";

const main = () => {
  const book = new Book("title 1", "author 1", "fantasy", 5);

  book.addReview({
    author: "andrey",
    text: "text",
    score: 4,
  });

  book.addReview({
    author: "andrey",
    text: "text",
    score: 1,
  });

  Product.getInfo(book);

  // Logger.info(book.title);
  // Logger.error("some error");
};

main();
