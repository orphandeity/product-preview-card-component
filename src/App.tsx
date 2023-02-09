import desktopImage from './assets/image-product-desktop.jpg';
import mobileImage from './assets/image-product-mobile.jpg';

function App() {
  return (
    <main className="relative flex h-screen items-center justify-center">
      <div className="flex max-w-sm flex-col overflow-hidden rounded-xl bg-white shadow desktop:max-w-2xl desktop:flex-row">
        <img
          src={desktopImage}
          alt="Gabrielle Essence Eau De Parfum"
          className="hidden w-1/2 desktop:block"
        />
        <img
          src={mobileImage}
          alt="Gabrielle Essence Eau De Parfum"
          className="desktop:hidden"
        />
        <div className="flex flex-col justify-between gap-4 p-8">
          <p className="uppercase tracking-[0.2rem] text-dark_grayish_blue/90">
            Perfume
          </p>

          <h1 className="font-serif text-4xl text-very_dark_blue">
            Gabrielle Essence Eau De Parfum
          </h1>

          <p className="leading-7 text-dark_grayish_blue/90">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <div className="flex items-center gap-6">
            <p className="font-serif text-4xl text-dark_cyan">$149.99</p>
            <p className="text-dark_grayish_blue/90 line-through">$169.99</p>
          </div>

          <button className="focus:ring-none flex items-center justify-center gap-3 rounded-lg bg-dark_cyan py-4 font-medium text-white hover:bg-dark_cyan_alt focus:border-none">
            <CartIcon />
            <p>Add to Cart</p>
          </button>
        </div>
      </div>
      <Attribution />
    </main>
  );
}

const Attribution = () => {
  return (
    <div className="absolute bottom-0 mx-auto flex gap-2 pb-2 text-xs">
      <p>
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-blue-500"
        >
          Frontend Mentor
        </a>
        .
      </p>
      <p>
        Coded by{' '}
        <a
          href="https://www.frontendmentor.io/profile/orphandeity"
          className="text-blue-500"
        >
          Jeff R Williams
        </a>
        .
      </p>
    </div>
  );
};

const CartIcon = () => {
  return (
    <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
        fill="#FFF"
      />
    </svg>
  );
};

export default App;
