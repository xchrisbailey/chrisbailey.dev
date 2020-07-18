---
slug: 'chakra-ui-and-react-testing-library'
title: 'Chakra-UI and react-testing-library'
date: '2020-07-07T14:50:10.352Z'
published: false
excerpt: 'setting up react-testing-library to handle chakra'
author: 'Chris Bailey'
tags:
  - 'react'
  - 'webdev'
  - 'javascript'
  - 'testing'
  - 'jest'
  - 'chakra'
---

Testing a react application using Chakra-UI is fairly straightforward once you adjust the `render` function of [react-testing-library](https://testing-library.com/).  So we'll start by testing a basic card example grabbed from the Chakra [docs](https://chakra-ui.com/box).

```javascript
import { Box, Image, Badge, Icon } from '@chakra-ui/core';
import PropTypes from 'prop-types';

const RecipeCard = (props) => {
  const { description, title, rating } = props;
  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" background="white" overflow="hidden">
      <Image
        src="ourImage.png"
        alt={title}
      />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge rounded="full" px="2" mr="1" variantColor="purple">
            type
          </Badge>
          <Badge rounded="full" px="2" mr="1" variantColor="green">
            tags
          </Badge>
        </Box>
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {title}
        </Box>
        <Box>{description}</Box>
        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <Icon name="star" key={i} color={i < rating ? 'teal.500' : 'gray.300'} />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {title}
            reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

RecipeCard.defaultProps = {
  rating: 0,
};

RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default RecipeCard;

```

We're also passing along a `ThemeProvider` in our `app.jsx` that has the following theme:

```javascript
# theme.js
import { theme as chakraTheme } from '@chakra-ui/core';

const fonts = { ...chakraTheme.fonts, mono: `'Menlo', monospace` };

const breakpoints = ['360px', '768px', '1024px', '1440px'];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    black: '#16161D',
  },
  fonts,
  breakpoints,
  icons: {
    ...chakraTheme.icons,
  },
};

export default theme;

```

As far as I've been able to work out the problem getting the `render` function to work comes from the passing of theme down from parent components, causing siblings not to render properly or at all. The solution to this was found in the [testing-library](https://testing-library.com/docs/react-testing-library/setup#custom-render) docs under setting up a custom `render`.  The only changes I needed to implement were passing down  own theme file and the `CSSReset` just for consistency.

```javascript
# /tests/test-utils.js
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import theme from '../src/theme';

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      {children}
    </ThemeProvider>
  );
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };

```

Now that we have extended the `render` component we can import it directly from our `test-utils.js` file and proceed to test as normal. Everything should be rendering now and we should be able to test our components to our hearts desire.

```javascript
import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import RecipeCard from '../src/components/card';

it('renders a card', () => {
  const title = 'heyoooo';
  const desc = 'basic card example';
  const rating = 4;
  render(<RecipeCard title={title} description={desc} rating={rating} />);

  expect(screen.getByText(title)).toBeInTheDocument();
  expect(screen.getByText(desc)).toBeInTheDocument();
});

```

