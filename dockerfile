FROM mcr.microsoft.com/dotnet/sdk:6.0 AS base
RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y libpng-dev libjpeg-dev curl libxi6 build-essential libgl1-mesa-glx
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs

WORKDIR /src
COPY . /src
RUN dotnet restore "MoggDotCom.csproj"
RUN dotnet build "MoggDotCom.csproj" -c Release -o /app/build

FROM base AS dotnet-publish
RUN dotnet publish "MoggDotCom.csproj" -c Release -o /app/publish

FROM node AS node-builder
WORKDIR /node
COPY ./ClientApp /node
RUN npm install

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS final
WORKDIR /app
EXPOSE 5050
RUN mkdir /app/wwwroot
COPY --from=dotnet-publish /app/publish .
ENTRYPOINT ["dotnet", "MoggDotCom.dll"]
