import React from 'react';
import styled from "@emotion/styled";
import useTopRateMovie from './useTopRateMovie';
import Card from '../../../components/Card';
import Slider from '../../../components/Slider';

const Base = styled.div``;

const Title = styled.h4``;

const TopRateMovieSection : React.FC = () => {

    const { data, isLoading } = useTopRateMovie();

    const getYear = (date: string) => {
        
        let year = 'none';

        if(date){
            year = date.split('-')[0];
        }

        return year;
    }

    return (
        <Base>
            <Title>Top Rated</Title>
            {
                isLoading || !data ? (
                    <div>Loading...</div>
                ) : (
                    <Slider>
                        {
                            data.data.results.map(movie => (
                                <Card 
                                    key={movie.id}
                                    linkUrl={`/movie/${movie.id}`}
                                    title={movie.title}
                                    posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${movie.poster_path}`}
                                    voteAverage={movie.vote_average}
                                    year={getYear(movie.release_date)}
                                />
                            ))
                        }
                    </Slider>
                )
            }
        </Base>
    )
    
}

export default TopRateMovieSection;