import { Skeleton, List, ListItem, Box } from "@mui/material";

export default function JobSkeleton() {
  return (
    <List>
      {Array.from({ length: 6 }).map((_, index) => (
        <ListItem key={index}>
          <Box width="100%">
            <Skeleton variant="rectangular" width="60%" height={30} />
            <Skeleton variant="rectangular" width="40%" height={20} />
          </Box>
        </ListItem>
      ))}
    </List>
  );
}
