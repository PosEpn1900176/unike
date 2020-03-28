import React from 'react';
import {
  Left,
  Container,
  Text,
  Button,
  Icon,
  Tabs,
  Tab,
  TabHeading,
  Footer,
  Right,
  Content,
} from 'native-base';
import { useNavigationParam } from 'react-navigation-hooks';
import { HeaderSignup } from '../../templates/headerSignup';
import InfoClient from './info';
import { ShowMap } from '../../templates/showMap';
import { useFetch } from '../../../hooks';
import { useSelector } from 'react-redux';

const ClientPage = ({ navigation }) => {
  const [item] = useNavigationParam('item');
  const selector = useSelector(state => state.user);
  const [data, fetch] = useFetch('finalizeRequest', 'post');
  console.log('POSTDATA', data);
  console.log('IDUSER', selector.Id);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleApprove = () => {
    fetch({
      query: {
        pedidoId: item.Id,
        profissionalId: selector.Id,
      },
    });
  };

  console.log(item);

  return (
    <Container>
      <HeaderSignup />
      {/* <Header hasTabs /> */}
      <Content>
        <Tabs>
          <Tab
            heading={
              <TabHeading>
                <Icon name="person" />
                <Text>Cliente</Text>
              </TabHeading>
            }>
            <InfoClient item={item} />
          </Tab>

          <Tab
            heading={
              <TabHeading>
                <Icon name="map" />
                <Text>Localização</Text>
              </TabHeading>
            }>
            <ShowMap data={[item]} />
          </Tab>
        </Tabs>
      </Content>
      <Footer>
        <Left>
          <Button transparent onPress={handleBack}>
            <Icon active name="arrow-back" />
            <Text>Voltar</Text>
          </Button>
        </Left>
        <Right>
          <Button transparent onPress={handleApprove}>
            <Icon active name="checkmark" />
            <Text>Atender</Text>
          </Button>
        </Right>
      </Footer>
    </Container>
  );
};

export { ClientPage };