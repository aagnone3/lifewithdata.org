import styled from 'styled-components';

export const Root = styled.div`
  text-align: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 0.25rem;
`;

export const Button = styled.button`
  width: 200px;
  height: 3rem;
  border-radius: 10px;
  background-color: #5995ef;
  color: #fff;
  border-radius: 10px;
`;

export const Heading = styled.h2`
`

export const Subheading = styled.h3`
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const Label = styled.label`
  text-align: left;
  display: flex;
  flex-direction: column;
  margin: 0.2rem;
`;

export const Text = styled.p`
  color: ${props => props.color || '#4d4d4d'};
  margin-bottom: 0;
`;
