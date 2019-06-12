import React, { Component } from 'react'

export const breakpoints = {
  isSmallScreen: '(max-width: 641px)',
  isMediumScreen: '(min-width: 768px)',
  isLargeScreen: '(min-width: 1281px)'
}

const getDisplayName = component =>
  component.displayName || component.name || 'Component'

const withMatchMedia = () => WrappedComponent =>
  class WithMatchMedia extends Component {
    static displayName = `WithMatchMedia(${getDisplayName(WrappedComponent)})`;

    state = Object.keys(breakpoints).reduce(
      (acc, breakpointKey) => ({
        ...acc,
        [breakpointKey]: false
      }),
      {}
    );

    componentDidMount() {
      this.medias = Object.keys(breakpoints).map(breakpointKey => {
        const breakpoint = breakpoints[breakpointKey]
        const media = window.matchMedia(breakpoint)
        const handleMatchMedia = this.matchMediaHandler(breakpointKey)

        media.addListener(handleMatchMedia)

        // eslint-disable-next-line react/destructuring-assignment
        if (media.matches && !this.state[breakpointKey]) {
          handleMatchMedia(media)
        }

        return {
          media,
          removeListener: () => {
            media.removeListener(handleMatchMedia)
          }
        }
      })
    }

    componentWillUnmount = () => {
      Object.values(this.medias).forEach(mediaInfo => {
        mediaInfo.removeListener()
      })
    };

    matchMediaHandler = breakpointKey => ({ matches }) => {
      this.setState({ [breakpointKey]: matches })
    };

    render() {
      return <WrappedComponent {...this.state} {...this.props} />
    }
  }

export default withMatchMedia
