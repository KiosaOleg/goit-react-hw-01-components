import React from 'react';
import {
  Item,
  List,
  Section,
  Label,
  Percentage,
  Title,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export default function Statistics({ data, title }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <List>
        {data.map(({ id, label, percentage }) => (
          <Item key={id} id={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Section>
  );
}

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
