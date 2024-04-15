import propTypes from "prop-types";
import Title from "../Title";
import Text from "../Text";

export default function AuthHeadline({ title, description }) {
    return (
        <header className="mb-8">
            <Title variant="h1">{title}</Title>
            <Text variant="large">{description}</Text>
        </header>
    )
}

AuthHeadline.propTypes = {
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
}