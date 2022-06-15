import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Igor Galdino</Text>
          <Text color="gray.300" fontSize="sm">
            igormgaldino@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Igor Galdino"
        src="https://github.com/igorgaldino.png"
      />
    </Flex>
  );
}
