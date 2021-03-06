import React, { PropTypes } from "react";

const isModifiedEvent = event =>
  !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

/**
 * The public API for rendering a router-aware <a>.
 */
class RouterLink extends React.Component {
  static contextTypes = {
    router: PropTypes.shape({
      push: PropTypes.func.isRequired,
      replace: PropTypes.func.isRequired,
      createHref: PropTypes.func.isRequired
    }).isRequired
  };

  static propTypes = {
    onClick: PropTypes.func,
    target: PropTypes.string,
    replace: PropTypes.bool,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
  };

  static defaultProps = {
    replace: false
  };

  handleClick = event => {
    if (this.props.onClick) this.props.onClick(event);

    if (
      !event.defaultPrevented && // onClick prevented default
        event.button === 0 && // ignore right clicks
        !this.props.target && // let browser handle "target=_blank" etc.
        !isModifiedEvent(event) // ignore clicks with modifier keys
    ) {
      event.preventDefault();

      const { router } = this.context;
      const { replace, to } = this.props;

      if (replace) {
        router.replace(to);
      } else {
        router.push(to);
      }
    }
  };

  render() {
    const { replace, to, children, ...props } = this.props; // eslint-disable-line no-unused-vars

    const href = this.context.router.createHref(
      typeof to === "string" ? { pathname: to } : to
    );

    if (typeof children === "function") {
      return children({ href: href, onClick: this.handleClick });
    }

    return <a {...props} onClick={this.handleClick} href={href}>{children}</a>;
  }
}

export default RouterLink;
