export default function(config) {
  const { Colors, Fonts } = config
  return {
    flex: 1,
    height: config.height,
    width: config.width,
    backgroundColor: Colors.ContainerBackgroundColor,
  };
}