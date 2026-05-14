import ffmpeg from 'fluent-ffmpeg'

export async function exportVerticalClip(
  input: string,
  output: string
) {
  return new Promise((resolve, reject) => {
    ffmpeg(input)
      .videoFilters('crop=1080:1920')
      .output(output)
      .on('end', resolve)
      .on('error', reject)
      .run()
  })
}
