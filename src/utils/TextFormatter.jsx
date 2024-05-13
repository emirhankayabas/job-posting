import propTypes from "prop-types";

export const TextFormatter = ({ data }) => {
  const htmlData = data;

  const parsedHtml = { __html: htmlData };

  const filteredHtml = parsedHtml.__html.replace(/<[^>]*>/g, (match) => {
    const tagName = match.slice(1, -1).toLowerCase();
    if (tagName === "p" || tagName === "ul" || tagName === "li") {
      return match;
    } else {
      return "";
    }
  });

  const filteredParsedHtml = { __html: filteredHtml };

  return <div dangerouslySetInnerHTML={filteredParsedHtml} />;
};

export default TextFormatter;

TextFormatter.propTypes = {
  data: propTypes.string.isRequired,
}