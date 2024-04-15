import propTypes from "prop-types";

import Text from "~/components/Text";
import Title from "~/components/Title";

export default function CompanySetupHeadline({ title, description }) {
    return (
        <header className="mb-10 flex flex-col gap-y-2">
            <Title variant="h3">
                {title}
            </Title>
            <Text variant="medium">
                {description}
            </Text>
        </header>
    )
}

CompanySetupHeadline.propTypes = {
    title: propTypes.string,
    description: propTypes.string
}