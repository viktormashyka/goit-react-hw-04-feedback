import PropTypes from 'prop-types';

import { Section } from '../Section/Section.styled';

export const SectionBox = ({ title, children }) => {
  return (
    <Section>
      <h2>{title}</h2>
      {children}
    </Section>
  );
};

SectionBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
