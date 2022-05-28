# DAPP Base
### A boilerplate for Dapp prototyping and a scalable project baseline

#### Optimized heavily for Developer UX 
- Typescript
- React.js
- Next.js
- ThemeUI
- React Query
- RainbowKit (WAGMI, Ethers)
- Recharts.js
- Animate.css
- Dead simple useReducer (redux-lite) based state managment
- 404 Fallback
- Scalable themeing pattern (see buttons.ts + index.tsx)
- SVG magic import (use "current" as values for props in SVG file to inherit from React)

### Inspiration
So you wanna move fast and build great things that can handle scaling?
Well its possible, you just need the right tools and a *minimal surface area of concerns*.

A lot of the complexity of frontend comes with managing patterns. It may be a fine pattern but its up to you to enforce it. With this boilerplate, you can follow simple patterns for themeing, state managment, html blocks, and data fetching who's API's are flexible but not overbearing and don't require you (or barely if they do) to maintain a mental model of the patterns. It is designed to be copy-paste friendly so that you don't need to know much at all, just keep the pattern you see, virtually no learning up front required. Simplicity is key.

### Needs
Want to have seperate state objects, not one massive global? Easy! Make a reducer and feed it to a state object.

Want to drop in a whole new theme? 
Copy paste a ThemeUI json object from a bunch of [resources](https://theme-ui.com/resources/).  

Want to login with a web3 wallet? Already done via Rainbowkit

Enjoy!
