import subprocess
import os
import json

def run_command(command):
    subprocess.run(command, shell=True)

def write_file(path, content):
    with open(path, 'w') as file:
        file.write(content)

def read_json(path):
    with open(path, 'r') as file:
        return json.load(file)

def write_json(path, content):
    with open(path, 'w') as file:
        json.dump(content, file, indent=4)

def setup_frontend():
    # Create React app
    run_command('npx create-react-app frontend')

    # Change to frontend directory
    os.chdir('frontend')

    # Install Tailwind CSS
    run_command('npm install -D tailwindcss')
    run_command('npx tailwindcss init')

    # Write tailwind.config.js
    tailwind_config = """\
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
"""
    write_file('tailwind.config.js', tailwind_config)

    # Write index.css
    index_css = """\
@tailwind base;
@tailwind components;
@tailwind utilities;
"""
    write_file('src/index.css', index_css)

    # Change back to parent directory
    os.chdir('..')

def setup_backend():
    # Create NestJS backend
    run_command('nest new backend -p npm')

    # Change to backend directory
    os.chdir('backend')

    # Write docker-compose.yml
    docker_compose = """\
version: '3.1'

services:
  mongodb:
    image: mongo
    ports:
      - 27017:27017
    environment:
      MONGO_INITDB_ROOT_USERNAME: rootuser
      MONGO_INITDB_ROOT_PASSWORD: rootpass
    volumes:
      - mongodb_data:/data/db

volumes:
  mongodb_data:
"""
    write_file('docker-compose.yml', docker_compose)

    # Change to src directory
    os.chdir('src')

    # Append MongoDB setup to app.module.ts
    mongodb_setup = """
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://rootuser:rootpass@localhost:27017'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
"""
    write_file('app.module.ts', mongodb_setup)

    # Change back to backend directory
    os.chdir('..')

    # Update package.json with npm run scripts
    package_json_path = 'package.json'
    package_json = read_json(package_json_path)
    package_json.setdefault('scripts', {})
    package_json['scripts']['db:start'] = 'docker compose up -d'
    package_json['scripts']['db:reset'] = 'docker compose down --volumes && sleep 1 && docker compose up -d'
    write_json(package_json_path, package_json)

def setup_environment():
    setup_frontend()
    setup_backend()

if __name__ == "__main__":
    setup_environment()

