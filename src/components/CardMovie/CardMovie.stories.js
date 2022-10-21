import CartMovie from ".";
import { MovieProvider } from "../../context/MovieContext";

export default {
  title: "Components/CartMovie",
  component: CartMovie,
};

const Template = (args) => (
  <MovieProvider>
    <CartMovie {...args} />
  </MovieProvider>
);

export const Default = Template.bind({});

Default.args = {
  movie: {
    id: 532639,
    title: "Pinocchio",
    year: "2022",
    vote_average: 6.7,
    overview:
      "A wooden puppet embarks on a thrilling adventure to become a real boy.",
    poster: "https://image.tmdb.org/t/p/w200/g8sclIV4gj1TZqUpnL82hKOTK3B.jpg",
    genres: ["Adventure", "Fantasy"],
  },
};
