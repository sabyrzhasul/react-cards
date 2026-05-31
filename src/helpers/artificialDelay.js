export const artificialDelay = async (delay = 700) => {
  return await new Promise(resolve => setTimeout(resolve, delay))
}