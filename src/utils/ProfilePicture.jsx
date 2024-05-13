import propTypes from 'prop-types';

const ProfilePicture = ({ name, pictureUrl, size = "medium" }) => {
    const initials = name ? name.split(' ').map((word) => word[0]).join('') : '';

    const sizeMap = {
        small: 'w-8 h-8 text-xs',
        medium: 'w-12 h-12 text-sm',
        large: 'w-14 h-14 text-lg',
    }

    return (
        <div>
            {pictureUrl ? (
                <img src={pictureUrl} alt={name} className={`${sizeMap[size]} rounded-full`} />
            ) : (
                <span className={`${sizeMap[size]} rounded-md flex bg-gray-700 text-white items-center justify-center font-semibold`}>{initials}</span>
            )}
        </div>
    );
};

ProfilePicture.propTypes = {
    name: propTypes.string,
    pictureUrl: propTypes.string,
    size: propTypes.oneOf(["small", "medium", "large"]),
}

export default ProfilePicture;
