import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IStarRatingProps {
  rating: number;
  starSize?: number;
  starColor?: string;
}

const StarRating: React.FC<IStarRatingProps> = ({
  rating,
  starSize = 20,
  starColor = '#FFDD95',
}) => {
  const ratingValue = rating;
  const fullStars = Math.floor(ratingValue);
  const hasHalfStar = ratingValue - fullStars >= 0.5;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Icon key={i} name="star" size={starSize} color={starColor} />);
    }
    if (hasHalfStar) {
      stars.push(<Icon key="halfStar" name="star-half-full" size={starSize} color={starColor} />);
    }
    return stars;
  };

  return <View style={{ flexDirection: 'row' }}>{renderStars()}</View>;
};

export default StarRating;
