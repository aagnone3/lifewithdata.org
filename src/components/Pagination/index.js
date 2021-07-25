import React from 'react';
import { Link } from 'gatsby';
import propTypes from 'prop-types';
import getConfig from '../getConfig';

import * as S from './styled';

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => {
  const { next, prev, of } = getConfig();

  return (
    <S.PaginationWrapper>
      <li>
        {!isFirst && (
          <Link to={prevPage}>← {prev}</Link>
        )}
      </li>
      <p>
        {currentPage} {of} {numPages}
      </p>
      <li>
        {!isLast && (
          <Link to={nextPage}>{next} →</Link>
        )}
      </li>
    </S.PaginationWrapper>
  );
};

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
};

export default Pagination;
