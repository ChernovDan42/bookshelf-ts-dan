type Links = {
  name: string;
  url: string;
};

export type Book = {
  age_group: string;
  amazon_product_url: string;
  article_chapter_link: string;
  author: string;
  book_image: string;
  book_image_height: number;
  book_image_width: number;
  book_review_link: string;
  book_uri: string;
  buy_links: Links[];
  contributor: string;
  contributor_note: string;
  created_date: Date;
  date: Date;
  description: string;
  first_chapter_link: string;
  list_name: string;
  price: string;
  primary_isbn10: string;
  primary_isbn13: string;
  publisher: string;
  rank: number;
  rank_last_week: number;
  sunday_review_link: string;
  title: string;
  updated_date: Date;
  weeks_on_list: number;
  __v: number;
  _id: string;
};



export type TopBooksInCategory = {
    list_name: string,
    books:Book[]
}