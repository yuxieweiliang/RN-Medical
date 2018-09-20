export default function(config) {
  const { Colors, Fonts } = config
  return {
    height: 80,
    width: config.width,
    backgroundColor: Colors.ContainerBackgroundColor,
  };
}