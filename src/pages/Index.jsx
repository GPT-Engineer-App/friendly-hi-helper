import { Container, Text, VStack, Box, Heading, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button } from "@chakra-ui/react";

const Index = () => {
  const events = [
    {
      title: "Team Building Workshop",
      description: "Join us for a fun and engaging team-building workshop.",
      date: "2023-10-15",
    },
    {
      title: "Company Picnic",
      description: "Enjoy a day out with your colleagues at our annual company picnic.",
      date: "2023-11-05",
    },
    {
      title: "Holiday Party",
      description: "Celebrate the holiday season with food, drinks, and entertainment.",
      date: "2023-12-20",
    },
  ];

  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">
          Team Building Bulletin Board
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Discover and participate in upcoming team-building activities and events.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} width="100%">
          {events.map((event, index) => (
            <Card key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <CardHeader>
                <Heading size="md">{event.title}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{event.description}</Text>
                <Text mt={4} fontWeight="bold">
                  Date: {event.date}
                </Text>
              </CardBody>
              <CardFooter>
                <Button colorScheme="teal" variant="solid">
                  Join Event
                </Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;