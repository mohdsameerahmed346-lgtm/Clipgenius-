import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function generateTranscript(filePath: string) {
  const transcript = await openai.audio.transcriptions.create({
    file: fs.createReadStream(filePath),
    model: 'whisper-1'
  })

  return transcript
}
