class Api::V1::CompositionsController < ApplicationController

    def index
        @compositions = Composition.all
        render json: @compositions
    end
end
