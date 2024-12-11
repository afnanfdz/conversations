import { Plugin } from 'obsidian';
import { ConversationsPostProcessor } from 'src/conversationsPostProcessor';

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.registerMarkdownPostProcessor(ConversationsPostProcessor);
  }
}