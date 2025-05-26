import {
  Skeleton,
  List,
  ListItem,
  Box,
  Card,
  Divider,
  Stack,
  useTheme
} from "@mui/material";

const JobSkeleton = ({ length = 6 }: JobSkeletonProps) => {
  const theme = useTheme();

  return (
    <>
      <List
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          gap: 2,
          width: "80%",
          mx: "auto",
          py: 2,
        }}
      >
        {Array.from({ length }).map((_, index) => (
          <ListItem key={index}>
            <Card
              key={index}
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                width: 300,
                transition: "0.3s",
                boxShadow: 1,
                borderRadius: 2,
                border: 1,
                borderColor: theme.custom.skeleton.border,
                bgcolor: theme.custom.skeleton.background,
                p: 2,
              }}
            >
              <Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Skeleton
                    variant="rectangular"
                    width={50}
                    height={50}
                    sx={{ mr: 2 }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Skeleton width="80%" height={24} />
                    <Skeleton width="60%" height={18} />
                  </Box>
                </Box>
                <Box sx={{ pt: 0 }}>
                  <Stack direction="row" spacing={1} flexWrap="wrap" mb={1}>
                    <Skeleton variant="rounded" width={70} height={30} />
                    <Skeleton variant="rounded" width={90} height={30} />
                  </Stack>
                  <Skeleton width="100%" height={20} />
                </Box>
              </Box>
              <Box>
                <Divider sx={{ my: 1 }} />
                <Skeleton width="50%" height={16} />
              </Box>
            </Card>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default JobSkeleton;
