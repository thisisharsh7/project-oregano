import styled from 'styled-components';
import tw from 'twin.macro';

// First Row Styles
export const FooterContainer = styled.div`
  ${tw`
    w-full
    bg-secondary
    mt-40
    overflow-x-hidden
`}
`;

export const SecondaryContainer = styled.div`
  ${tw`
    flex
    flex-row
    sm:flex-col
    justify-between
    items-start
    sm:items-center
    w-full
    mt-8
  `}
`;

export const Logo = styled.img`
  ${tw`
    w-10
    h-auto
    sm:hidden
  `}
`;

export const IconContainer = styled.div`
  ${tw`
    flex
    flex-row
    flex-wrap
    justify-end
    gap-[20px]
    mb-2
    sm:w-full
    sm:justify-between
  `}
`;

// Grid Styles (Row 2)
export const Grid = styled.div`
  ${tw`
    grid
    grid-cols-track
    bg-secondary
    gap-4
    overflow-x-hidden
    mt-4
  `}
`;

export const NoStyleNav = styled.a`
  ${tw`
    no-underline
    mt-2

    lg:p-2
    md:p-2
  `}

  @media (max-width: 1045px) {
    padding: 10;
  }
`;

export const EmptyDiv = styled.div`
  background: transparent;
  padding: 10px;

  @media (max-width: 1045px) {
    display: none;
  }

  min-height: 175px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

export const LinksContainer = styled.div`
  background: transparent;
  padding: 10px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  grid-column: 1 / span2;
  height: auto;
  justify-content: center;
  align-items: center;

  @media (min-width: 1045px) {
    display: none;
  }
`;

// Final Row Styles
export const LogoContainer = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 30px;

  @media (max-width: 640px) {
    margin-top: 20px;
    width: 70%;
  }

  @media (max-width: 464px) {
    justify-content: center;
  }
`;

// Check css from here onwards.
const FooterCards = styled.div`
  ${tw`
  w-full
  h-auto
  rounded-xl
  mx-auto
`}
`;

const CardContainer = styled.div`
  ${tw`
  grid
  bg-background-dark
  py-4
  pr-2
  grid-flow-col
  rounded-xl
  auto-cols-auto
`}
`;

const CardImage = styled.img`
  max-height: 30px;
`;

const FooterCardImg = styled.div`
  ${tw`
  px-4
  justify-center
`}
`;

const FooterCardText = styled.div`
  ${tw`
  px-2
  `}
`;

const FooterCardTextSmall = styled.div`
  ${tw`
  font-normal
  text-base
  sm:text-sm
  text-color-secondary
  font-roboto
  justify-center
  my-4
  `}
`;

export {
  FooterCards,
  CardContainer,
  FooterCardText,
  FooterCardImg,
  FooterCardTextSmall,
  CardImage,
};
