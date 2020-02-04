import React from 'react';
import InitialPresentation from '../presentation';

const InitialContainer = props => {
  const onGoSignIn = () => props.navigation.navigate('SignupAuth');
  const onGoSignUp = () => props.navigation.navigate('SignupContactData');

  return (
    <InitialPresentation onGoSignUp={onGoSignUp} onGoSignIn={onGoSignIn} />
  );
};

export default InitialContainer;
